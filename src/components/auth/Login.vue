<template>
 <div>
     <div class="app">
      <b-container class="bv-example-row">
           <b-row align-h="center" class="mt-5">
             <b-col cols="5">
              <b-card class="p-3">
                  <h3 class="mb-4">Login</h3>
                  <b-form @submit.prevent="submit">
                    <b-form-group
                      id="input-group-1"
                      label="Email address:"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="email"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                      <b-form-input
                        id="password"
                        type="password"
                        v-model="form.password"
                        required
                        placeholder="Password"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-4">
                      <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                        <b-form-checkbox value="remember">Remember me</b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>

                    <div class="d-flex justify-content-between">
                      <div>
                        <b-button type="submit" variant="primary">Login</b-button>&nbsp;
                      </div>
                      <div>
                        <a href="#" v-b-modal.modal1>Forgot Password</a>
                      </div>
                    </div>
                  </b-form>
          <router-link class="nav-link" to="/Register" >
            <a href="Register"> Create account: <b>Register</b></a>
          </router-link>
        </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal1" title="Forgot Password">
      <div>Send email to Admin :
      </div>
     <input  class="inemail" type="email" placeholder="Email adress">
    </b-modal>
  </div>
  </div>
</template>

<script>
// /* eslint-disable*/
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        // eslint-disable-next-line no-unused-vars
        .then(data => {
          this.$router.push({name: 'profile'})  
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>



<style scoped>

.main-div input {
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  padding: 10px;
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
  border: 1px solid #010203;
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
  color: #0c1018;
  border: 1px solid #0b0e14;
  cursor: pointer;
}

.btn-login {
  align-items: center;
  width: 7%;
  height: 7%;
} 
</style>
