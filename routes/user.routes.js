let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  router = express.Router();

const DIR = './public/';

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, DIR);
  },
  filename: (_req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (_req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

// User model
let User = require('../models/User');

// eslint-disable-next-line no-unused-vars
router.post('/file-upload', upload.array('files', 10), (req, res, _next) => {
  const reqFiles = []
  const url = req.protocol + '://' + req.get('host')
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + '/public/' + req.files[i].filename)
  }

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    files: reqFiles
  });
  user.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "Done upload!",
      userCreated: {
        _id: result._id,
        files: result.files
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
})

// eslint-disable-next-line no-unused-vars
router.get("/", (_req, res, _next) => {
  User.find().then(data => {
    res.status(200).json({
      message: "Data fetched!",
      users: data
    });
  });
});

module.exports = router;