<template>
  <div>
    <div class="container">
      <div>
  <b-card
    title="Upload your Picture"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 60rem;"
    class="mb-2"
  >
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <input type="file" @change="uploadFile" multiple>
            </div>

            <div class="form-group">
                <button class="btn btn-success">Upload</button>
                <router-link to="Profile"><button class="btn btn-danger ml-4 my-sm-0" type="submit">Cancel</button></router-link>
            </div>
        </form>
  </b-card>
</div>

    </div>    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
      return {
        files: null
      };
    },
    methods: {
        uploadFile (event) {
        this.files = event.target.files
        },
        handleSubmit() {
          const formData = new FormData();
          for (const i of Object.keys(this.files)) {
            formData.append('files', this.files[i])
          }
          axios.post('http://localhost:4000/api/file-upload', formData, {
          })
          // .then((res) => {
          //   console.log(res)
          // })
        }  
    }

}
</script>

<style scoped lang="scss">
.container {
  max-width: 600px;
}
</style>