<template>
<div class="app">
  <nav class="navbar navbar-expand-md">
    <a class="navbar-brand" href="/">Employe Manager</a>
    <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="main-navigation">
      <ul class="navbar-nav">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-5" >
            <template v-if="user.loggedIn">
                <div class="nav-item row">
                  <li class="nav-item">
                  </li>
                <a class="nav-link">{{user.data.displayName}} </a>
                </div>
                <li class="nav-item">
                  <a class="nav-link" @click.prevent="signOut">Sign Out</a>
                </li>
            </template>  
              <template v-else>
                <!-- <router-link class="nav-link" to="/dashboard" >
                      <a>Dashboard</a>
                </router-link> -->
                <li class="mr-5">
                      <router-link  to="Adminlogin" class="nav-link"> Admin</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="login" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="register" class="nav-link">Register</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/contact" >
                    <a>Contact</a>
                  </router-link>  
                </li> 
              </template>
          </ul>
        </div>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(this.user.data.displayName)
  },

  methods: {
    search() {
      // eslint-disable-next-line no-console
      console.log(this.user);
      this.$store.dispatch("search", { text: this.search });
    },
      data() {
    return {
      name: ""
    };
  },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "contact"  
          });
        });
    }
  },

};
</script>
