<template>
  <div class="welcome-page">
    <button class="button logout" v-on:click="logout">Logout</button>

    <article class="covers" v-for="(lubble, idx) in lubbles" :key="idx">
      <div>
        <img class="image" :src="lubble.image" height="100%" width="100%" />
        <p>{{ lubble.name }}</p>
        <hr />
        <button class="button" @click="deletelubble(lubble.id)">Delete</button>
      </div>
    </article>

    <form @submit="addLubble(name, image)">
      <h2>Add a New lubble</h2>
      <input v-model="name" placeholder="lubble Name" class="input" required />
      <input
        v-model="image"
        placeholder="lubble Image"
        class="input"
        required
      />
      <button type="submit" class="button">Add New lubble</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../main";

export default {
  name: "Lubbles",
  data() {
    return {
      lubbles: [],
      name: "",
      image: ""
    };
  },
  firestore() {
    return {
      lubbles: db.collection("lubbles").orderBy("createdAt")
    };
  },
  methods: {
    addLubble(name, image) {
      const createdAt = new Date();
      db.collection("lubbles").add({ name, image, createdAt });
      this.name = "";
      this.image = "";
    },
    deletelubble(id) {
      db.collection("lubbles")
        .doc(id)
        .delete();
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  height: 300px;
  width: 300px;
}
</style>
