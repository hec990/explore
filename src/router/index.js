import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Register from "@/views/Register";
import PersonalCenter from "@/views/PersonalCenter";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/personalcenter',
    component: PersonalCenter
  }
]

const router = new VueRouter({
  routes
})

export default router
