<template>
<div class="container">
  <div id="login_div" class="main-div">
    <div class="main-input ">
      <h3>Register </h3>
        <div v-if="error" class="alert alert-danger">{{error}}</div>
          <form action="#" @submit.prevent="submit">
            <input
            class="p-2"
              id="name"
              type="name"
              required
              placeholder="Name"
              v-model="form.name"/>
            <input 
            class="p-2"
              id="email" 
              type="email" 
              required
              placeholder="Email Adresse" 
              v-model="form.email"/>
            <input 
            class="p-2"
              id="password" 
              type="password" 
              required
              placeholder="Password"  
              v-model="form.password"/>
              <!-- <input 
              class="p-2"
              id="department" 
              type="department" 
              required
              placeholder="department"  
              v-model="form.department"/>
              <input 
              class="p-2"
              id="description" 
              type="description" 
              required
              placeholder="description"  
              v-model="form.description"/>
              <input 
              class="p-2"
              id="joindate" 
              type="joindate" 
              required
              placeholder="MM-DD-YYYY"  
              v-model="form.joindate"/>
              <input 
              class="p-2"
              id="status" 
              type="status" 
              required
              placeholder="Status"  
              v-model="form.status"/> -->
            <!-- <router-link to="/#"> -->
              <button type="submit" class="btn btn-primary">Register</button>
            <!-- </router-link> -->
            </form>
      <router-link class="nav-link" to="/Login" >
        <a href="Register">Already Have an Account? <b> Log in</b></a>
      </router-link>
    </div>
  </div>
</div>
</template>


<script>
/* eslint-disable*/
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  //qitu behet REGJISTRIMI i userit ne firebase
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
           console.log(user);
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style scoped>
.hello {
  margin: 30%;
  margin-top: 0;
  margin-bottom: 0;
}


.main-div {
  margin: 0;
  padding: 0;
}
.main-input {
  /* padding: 200px;
  padding-top: 0;
  padding-bottom: 0; */
  width: 30%;
  margin: 0px auto;
  margin-top: 150px;
  padding: 0; 
}
.main-div input {
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  padding: 15px;
  outline: none;
  width: 100%;
  margin-bottom: 20px;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
}

.main-div input:focus {
  border: 1px solid #777;
}
 
.main-div button, .loggedin-div button {
  background: #107532;
  color: #fff;
  border: 1px solid #080a08;
  border-radius: 5px;
  padding: 15px;
  display: block;
  width: 100%;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
}

.main-div button:hover, .loggedin-div button:hover {
  background: #fff;
  color: #5d8ffc;
  border: 1px solid #5d8ffc;
  cursor: pointer;
}

.btn-login {
  align-items: center;
  width: 7%;
  height: 7%;
} 
</style>