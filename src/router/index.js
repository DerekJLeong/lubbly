import Vue from "vue"
import Router from "vue-router"
import firebase from "firebase"

import Home from "@/components/Homepage"
import Login from "@/components/Login"
import SignUp from "@/components/SignUp"
import NotFound from "../components/NotFound"

Vue.use(Router)

let router = new Router({
  routes:
    [
      {
        path: "/",
        redirect: "/login",
      },
      {
        path: "/login",
        name: "Login",
        component: Login
      },
      {
        path: "/signup",
        name: "SignUp",
        component: SignUp
      },
      {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "*",
        name: "NotFound",
        component: NotFound,
      },
    ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  //(requireAuth && !currentUser) ? next("login") : (!requiresAuth && currentUser) ? next("home") : next()
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router