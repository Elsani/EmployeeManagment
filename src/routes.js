import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue'
import Employee from './components/Administrator/Employee.vue'
import EditEmployee from './components/Administrator/EditEmployee.vue';
import NewEmployee from './components/Administrator/NewEmployee.vue';
import Contact from './components/Contact.vue'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Adminlogin from './components/Administrator/Adminlogin.vue'
import NotFound from './components/user/NotFound.vue'
import Post from './components/user/Post.vue'
import Profile from './components/user/Profile.vue'
import EditProfile from './components/user/EditProfile.vue'
import fileUpload from './components/user/fileUpload.vue'
import Task from './components/user/Task.vue'
import EditTask from './components/user/EditTask.vue'
//importojme gjithe ato komponenta qe do i regjistrojme si routes



export const routes = [
    { path:'/', name: 'home', component:Home},
    { path:'/dashboard', name: 'dashboard', component:Dashboard},
    { path: '/employee', name: 'employee', component:Employee},
    {path: '/editemployee',name: 'editemployee', component: EditEmployee},
    {path: '/newemployee',name: 'newemployee', component: NewEmployee},
    { path:'/contact', name:'contact',component:Contact},
    { path:'/login', name:'login',component:Login},
    { path:'/register', name:'register',component:Register},
    { path:'/adminlogin', name:'adminlogin',component:Adminlogin},
    { path:'/notfound', name:'notfound',component:NotFound},
    { path:'/post', name:'post',component:Post},
    { path:'/profile', name:'profile',component:Profile},
    { path:'/editprofile', name:'editprofile',component:EditProfile},
    { path:'/fileupload', name:'fileupload',component:fileUpload},
    { path:'/task', name:'task',component:Task},
    { path:'/edittask', name:'edittask',component:EditTask},






    
]