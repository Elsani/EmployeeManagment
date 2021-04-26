<template>
    <div class="container m-4, p-4">
        <h3>Create new Employee</h3>
        <form @submit="create">
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
                    <input type="text" class="form-control" v-model="employees.joinD" required >
                </div>
                  <div class="form-group">
                    <textarea class="form-control" rows="4" placeholder="Description about yourself" required v-model="employees.description"></textarea>
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="status" required v-model="employees.status">
                  </div>
                    <input type="submit" class="btn btn-primary " value="create">
                    <router-link to="/Employee" class="btn btn-danger ml-2">Cancel</router-link>
            </form>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'CreateEmployees',
  data () {
    return {
      employees:{},
    }
  },
  methods: {
    create () {
      
      axios.post(`http://localhost:4000/employees`, this.employees)
      .then(response => {
        //console.log(response);
        this.$router.push({
          name: 'employee',
          //params: { id: response.data._id }
        })
        })
      
    }
  }
}
</script>