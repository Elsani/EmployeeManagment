<template>
    <div class="container">
        <h1>Create post</h1>
        <div class="card">
        <div class="create-post">
            <label for="create-post">Create a Post!</label><br>
            <form>
                <div class="col">
                    <div>
                    <input type="text" id="create-post" class="form-control col-5" v-model="text" placeholder="write something.."><br>
                    <button class="btn btn-primary mr-2" v-on:click="createPost">Post!</button>
                    <router-link to="profile"><button class="btn btn-danger"> Cancel</button></router-link>
                    </div>
                </div>
            </form>
            </div>
        </div>
        <!-- qitu krijohet posti  edhe kur te klikohet 2 her posti 
        duhet me u fshi ,  dmth ku shkrun dbclick e ki deletePost-->
        <hr>
        <p  class="error" v-if="error">{{error}}</p>
        <div class="posts-container">
            <div class="post" v-for="(post, index) in posts"
             v-bind:item="post"
             v-bind:index="index"
             v-bind:key="post._id"
             v-on:dblclick="deletePost(post._id)"
            > 
            {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
            <p class="text">{{post.text}}</p>

            </div>
        </div>
    </div>
</template>

<script>
import PostService from '../../PostService';
export default {
    name: 'post',
    data() {
        return{ 
        posts: [],
        error: '',
        text: ''
        } 
    },
    async created() {
        try {
            this.posts = await PostService.getPosts();
        } catch(err) {
            this.error = err.message;
        }
    },
    methods: {
        async createPost() {
            await PostService.insertPost(this.text);
            this.posts = await PostService.getPosts();
        },
        async deletePost(id) {
            await PostService.deletePost(id);
            this.posts = await PostService.getPosts(); 
        }
    }
}
</script>

<style scoped>
div.container {
    max-width: 800px;
    margin: 0 auto;
}

p.error {
    border: 1px solid #ff5b5f;
    background-color: #ffc5c1;
    padding: 10px;
    margin-bottom: 15px;
}
div.post {
    position: relative;
    border: 1px solid #5bd658;
    background-color: #bcffb8;
    padding: 10px 10px 30px 10px;
    background: darkgreen;
    color: white;
    font-size: 13px;
}
p.text {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0;
}
</style>