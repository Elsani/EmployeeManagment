<template>

    <div class="app">
        <app-Header></app-Header>
        <div class="page" v-if="getSpinner">
            <!-- <b-spinner class="spinner" :variant="'primary'" :key="'primary'"></b-spinner> -->
        </div>
        <!-- <Post/> -->
                <!--<h1 v-highlight="'red'">Routing</h1>
                <p >Hello World</p>
                <h3>Local Directive</h3>
                <p>{{text | toUpperCase | to-lowercase}}</p> -->
                
        <router-view></router-view>
    </div>      
</template>

<script>
/* eslint-disable */
    import Post from './components/user/Post'
    import Header from './components/Header.vue';
    import { mapGetters } from "vuex";
    export default {
        data(){
            return{
                text:'Hello World'
            }
        },
        computed: {
            ...mapGetters(["getSpinner"])
        },
        components:{
            appHeader:Header,
            Post
        },directives:{
            'local-hightlight':{
                bind(el, binding, vnode){
                el.style.color='green';
            }
        }
    }
    }
</script>

<style>
@import '../src/assets/style.css';
/* @import url('https://fonts.googleapis.com/css?family=lato:400,700'); */
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

body {
 background: #EEF1F4;
 font-family: 'lato',sans-serif;

}
.spinner {
  z-index: 26;
  position: relative;
  top: 50%;
}
</style>
