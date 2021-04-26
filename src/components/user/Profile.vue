<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <div class="col-sm-8 mx-auto">
              <template>
              <div>
                <b-button v-b-toggle.sidebar-no-header> Sidebar</b-button>
                <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
                  <template v-slot:default="{ hide }">
                    <div class="p-3">
                      <h4 id="sidebar-no-header-title">Miresevini</h4>
                      <p>
                        Mundeni te krijoni ndonje task per vete duke klikuar ne butonin <b>Create Task</b>,
                        Pastaj mundeni qe te ngarrkoni ndonje fotografi tuajin duke klikuar butonin <b>Upload</b>,
                        dhe mundeni qe te editoni apo permiresoni Profilin tuaj duke klikuar  <b>Edit profile</b>.
                      </p>
                      <nav class="mb-3">
                        <b-nav vertical>
                          <router-link to="editprofile"><button class="btn btn-primary btn-block mr-4 my-sm-0" type="submit">Edit Profile</button></router-link><br>
                          <router-link to="/task"><button class="btn btn-success btn-block " active @click="hide">Create Task</button></router-link><br>
                          <router-link to="fileUpload"><button class="btn btn-warning btn-block  mr-4 my-sm-0" type="submit">Upload </button></router-link><br>
                          <router-link to="post"><button class="btn btn-dark btn-block  mr-4 my-sm-0" type="submit">Create  Post</button></router-link><br>
                          <router-link to="dashboard"><button class="btn btn-info btn-block  mr-4 my-sm-0" type="submit">Dashboard</button></router-link>
                        </b-nav>
                      </nav>
                      <b-button variant="danger" block @click="hide">Close Sidebar</b-button>
                    </div>
                  </template>
                </b-sidebar>
              </div>
            </template>
                <h1 class="text-center">PROFILE</h1>
            </div>
            <table class="table col-md-6 mx-auto">
                <tbody>
                   <!-- <tr>
                        <td>Your ID</td>
                        <td>{{employeeid}}</td>
                    </tr> -->
                    <tr>
                        <td>First Name</td>
                        <!-- <td>{{employee.name}}</td> -->
                    </tr>
                    <tr>
                        <td>Email</td>
                        <!-- <td>{{employee.email}}</td> -->
                    </tr>
                    <tr>
                        <td>Department</td>
                        <!-- <td>{{employee.department}}</td> -->
                    </tr>
                    <tr>
                        <td>Description</td>
                        <!-- <td>{{employee.description}}</td> -->
                    </tr>
                    <tr>
                        <td>joining Date</td>
                        <!-- <td>{{employee.joinD}}</td> -->
                    </tr>   
                    <tr>
                        <td>Status</td>
                        <!-- <td><span class="badge badge-pill badge-primary">{{employee.status}}</span></td> -->
                    </tr>
                    <!-- <button type="button" class="btn btn-info m-2" @click.stop="editemployee(employee._id)">Edit Profile</button> -->
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
/* eslint-disable */
import axios from 'axios';
    export default {
      computed: {
            ...mapGetters({
// // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
      },
      name: 'ShowEmployees',
        data(){
            return{
            employee_id: '',
            name: '',
            email: '',
            department: '',
            description: '',
            joinD: '',
            status:''
            }
        },
       created () {
        axios.get(`http://localhost:4000/employees/` + this.$route.params.id)
        .then(response => {
        this.employees = response.data
    })
  },
        //SPO BON O VLLAAAA
    methods: {
      editemployee(employeeid){
        this.$router.push({
          name: 'editemployee',
          params: {id: employeeid}
        })
      },
      deleteemployee(employeeid){
          axios.delete(`http://localhost:4000/employees/` + employeeid)
          // eslint-disable-next-line no-unused-vars
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