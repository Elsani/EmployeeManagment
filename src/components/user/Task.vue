<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="addTask">
                            <div class="form-group">
                                <input type="text"
                                v-model="tasks.title"
                                placeholder="Insert a Task"
                                class="form-control">
                            </div>
                            <div class="form-group">
                                <textarea
                                v-model="tasks.description"
                                class="form-control"
                                cols="30"
                                rows="10"
                                placeholder="Insert A Description"></textarea>
                            </div>
                            <button class="btn btn-primary mr-2" value="addTask">Create</button>
                            <router-link to="profile"><button class="btn btn-danger"> Cancel</button></router-link>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task in tasks" :key="task._id">
                            <td>{{task.title}}</td>
                            <td>{{task.description}}</td>
                            <td>
                            <button type="button" class="btn btn-info m-2" @click.stop="editTask(task._id)">Edit</button>
                            <button type="button" class="btn btn-danger" @click.stop="deleteTask(task._id)">Delete</button>
                            <!-- <button @click="deleteTask(task._id)" class="btn btn-danger">delete</button>
                            <button @click="editTask(task._id)" class="btn btn-secondary">Edit</button> -->
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>
        </div>
    </div>
</template>
<script>
  /* eslint-disable */
import axios from 'axios';
    export default {
      name: 'ShowTasks',
        data(){
            return{
              task: {
                  title:'',
                  description: '',
              },
                tasks: {}
            }
        },

        created () {
    axios.get(`http://localhost:4000/tasks/`)
    .then(response => {
      this.tasks = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
   //QITU E KI per me BO ADD NEW TASK ! SPO BON !
  		methods: {
			/**
			 * Event: add new task
			 */
			onAddNewTask(e) {
				e.preventDefault()
				const taskName = this.text
				this.$emit("eventAddNewTask", taskName)
				// reset the textbox
				this.text = ""
			}
		},//Deri QITU . qikjo e Shton nje task 
    methods: {
        addTask() {
            axios.post(`http://localhost:4000/tasks/`, this.tasks)
            .then(response => {
            })
        },
      editTask(taskid){
        this.$router.push({
          name: 'edittask',
          params: {id: taskid}
        })
      },
      deleteTask(taskid){
          axios.delete(`http://localhost:4000/tasks/` + taskid)
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