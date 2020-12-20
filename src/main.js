import Vue from 'vue'
import App from './App'
import router from './router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

const firebaseConfig = {
  apiKey: "AIzaSyCYp6BKpeIvp4Bu8JIowG0Wt9ZaNQGE6tk",
  authDomain: "lubbly.firebaseapp.com",
  projectId: "lubbly",
  storageBucket: "lubbly.appspot.com",
  messagingSenderId: "704723272981",
  appId: "1:704723272981:web:1d886bb20e976b6f51d51c",
  measurementId: "G-ZWP51LR33Q"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
