import axios from 'axios';
//duhet me kriju qitu  nje  klas ne databaz te Mongodb POST
const url = 'http://localhost:4000/posts';

class PostService {
    //get Posts
    static getPosts() {
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    //eh QITU  qe eshte ...post Shkon e thirr me VUEX Metoden POST
                    //   ta dim ku jem a !
                    data.map(post =>({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    //Create Post   
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    //Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}
export default PostService;










