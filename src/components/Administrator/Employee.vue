<template>
  <div class="container features">
    <h3>Admin Area</h3>
    <div class="card">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Description</th>
          <th scope="col">Department</th>
           <th scope="col">Joining Date</th>
            <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee._id">
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.description }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.joinD }}</td>
         <td><span class="badge badge-pill badge-primary">{{employee.status}}</span></td>

          <!-- the click event's propagation will be stopped -->
          <button type="button" class="btn btn-info m-2" @click.stop="editemployee(employee._id)">Edit</button>
          <button type="button" class="btn btn-danger" @click.stop="deleteemployee(employee._id)">Delete</button>
        </tr>
        <router-link to="NewEmployee">
        <button type="button" class="btn btn-primary">Add Employee</button>
        </router-link>
      </tbody>
    </table>
    </div>  
  </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';
    export default {
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
<style scoped>
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>