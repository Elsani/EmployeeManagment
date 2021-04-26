<template>
  <div class="container">
    <div class="jumbotron mt-5">
            <div class="col-sm-8 mx-auto">
            <h3>Edit Your Profile</h3>
              <div>
                  <div>
                      <form @submit="onSubmit">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" required v-model="tasks.title">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email" required v-model="tasks.description">
                        </div>
                            <button type="submit" class="btn btn-secondary" value="Submit">Submit</button>
                            <router-link to="/task" class="btn btn-danger ml-2">Cancel</router-link>
                      </form>
                  </div>
              </div> 
          </div>
      </div>  
  </div>
</template>

<script>
/* eslint-disable  */
import axios from 'axios'
export default {
    name: 'EditEmployees',
    data () {
        return{
            employees: {}
            }
        },
       created () {
        axios.get(`http://localhost:4000/employees/` + this.$route.params.id)
        .then(response => {
        this.employees = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit () {
      axios.put(`http://localhost:4000/employees/` + this.$route.params.id, this.employees)
      .then(response => {
        this.$router.push({
          name: 'profile',
          //params: { id: this.$route.params.id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
