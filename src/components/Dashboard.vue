<template>
  <div class="container features">
    <h3>Employees</h3>
    Welcome:  {{user.data.displayName}}
    <div class="card">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Department</th>
          <th scope="col">Description</th>
          <th scope="col">Joining Date</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee._id">
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.description }}</td>
          <td>{{ employee.joinD }}</td>
          <td>{{ employee.status }}</td>
        </tr>
        <router-link to="NewEmployee">
        </router-link>
      </tbody>
    </table>
    </div>
            <router-link to="profile"><button class="btn btn-danger"> Cancel</button></router-link> 
  </div>
</template> 

<script>
import { mapGetters } from "vuex";
/* eslint-disable */
import axios from 'axios';
    export default {
        computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
      name: 'ShowEmployees',
        data(){
            return{
                employees: {}
            }
        },
        created () {
    axios.get(`http://localhost:4000/employees/`)
    .then(response => {
      this.employees = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
    methods: {
      editemployee(employeeid){
        this.$router.push({
          name: 'editemployee',
          params: {id: employeeid}
        })
      },
      deleteemployee(employeeid){
          axios.delete(`http://localhost:4000/employees/` + employeeid)
          .then((result) => {
            //refresh on same page
            this.$router.go({
              
            })
          })
          .catch(e => {
            this.errors.push(e)
          })
        }
    }
  }
</script>