import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import * as firebase from "firebase";
//fajlli routes importohet te kjo pjese dhe ne at file kemi deklaruar routat e ndryshem se cila route te cila komponent dergon gjate klikut
import { routes } from './routes';
//vue router e instalojme me npm install vue-router pastaj e thirrim ne main.js me import VueRouter from 'vue-router'
import store from "./store";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
//regjistrimi i filterit global per zvogelimin e shkronjave
Vue.filter('to-lowercase',function(value){
  return value.toLowerCase();
});

//regjistrimi i direktives globable highlight 
Vue.directive('highlight',{

  /* eslint-disable */
  bind(el, binding, vnode){
    //el.style.backgroundColor='blue';
    //el.style.backgroundColor=binding.value;
    if(binding.arg=='background'){
      el.style.backgroundColor=binding.value;
    }else{
      el.style.color=binding.value;
    }
  }
});


const configOptions = {
  apiKey: "AIzaSyC9ltkH3piRWyC2gEuzAG7cGN9_dXoVlko",
  authDomain: "selfproject-a852c.firebaseapp.com",
  databaseURL: "https://selfproject-a852c.firebaseio.com",
  projectId: "selfproject-a852c",
  storageBucket: "selfproject-a852c.appspot.com",
  messagingSenderId: "429733345387",
  appId: "1:429733345387:web:c02b218d4d0204636fd92e",
  measurementId: "G-SE0FRCVKVT"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
