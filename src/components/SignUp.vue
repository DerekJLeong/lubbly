<template>
  <div class="sign-up">
    <img src="/src/assests/logo.png" class="image" height="100%" width="100%" />

    <h1>Create a New Account</h1>

    <input
      type="text"
      v-model="email"
      placeholder="Email Address"
      class="input"
      required
    />

    <br />

    <input
      type="password"
      v-model="password"
      placeholder="Password"
      class="input"
      required
    />

    <br />

    <button v-on:click="signUp" class="button">Sign Up!</button>
    <button class="button">
      <router-link to="/login">
        Already Have an Account?
      </router-link>
    </button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Sign Up",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace("/login");
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>
