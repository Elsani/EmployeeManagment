<template>
  <div class="container">
    <div class="jumbotron mt-5">
            <div class="col-sm-8 mx-auto">
            <h3>Edit Your Profile</h3>
              <div>
                  <div>
                      <form @submit="onSubmit">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" required v-model="employees.name">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email" required v-model="employees.email">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="department" required v-model="employees.department">
                        </div>
                        <div class="form-group">
                          <label>Joining Date (MM-DD-YYYY)</label>
                          <input type="text" class="form-control" disabled v-model="joiningdate" required >
                      </div>
                        <div class="form-group">
                            <textarea class="form-control" placeholder="About yourself" required v-model="employees.description"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="status" required v-model="employees.status">
                        </div>
                            <button type="submit" class="btn btn-secondary" value="Submit">Submit</button>
                            <router-link to="/profile" class="btn btn-danger ml-2">Cancel</router-link>
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
