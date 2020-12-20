<template>
  <div class="not-found">
    <img src="/src/assets/logo.png" width="300px" />
    <h3>Wuh!?</h3>
    <p>Looks like you are lost.</p>
    <button v-on:click="notFound" class="button">Go Back To Login</button>
  </div>
</template>

<script>
export default {
  name: "Not Found",
  data: () => {
    return {};
  },
  methods: {
    notFound() {
      this.$router.replace("/home");
    }
  }
};
</script>

<style scoped>
.not-found {
  margin-top: 40px;
}
</style>
