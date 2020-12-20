<template>
  <div class="login">
    <img src="/src/assests/logo.png" class="image" height="100%" width="100%" />

    <h1>Lubbly</h1>

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

    <button v-on:click="login" class="button">Login</button>

    <p>
      <router-link to="/signup">
        New Around Here? Create a New Account!
      </router-link>
    </p>

    <p></p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data: () => {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace("/home");
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>

<style scoped>
.image {
  height: 300px;
  width: 300px;
}
</style>
