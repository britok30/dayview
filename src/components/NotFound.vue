<template>
  <div class="notfound">
    <div class="notfoundtext">
      <h1>
        404. Page Not Found. The page you're trying to access does not exist.
      </h1>
      <router-link to="/" class="btn btn-outline-light"
        >Return to Home</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
.notfound {
  background: linear-gradient(rgba(0, 0, 0, 0.452), rgba(0, 0, 0, 0.452)),
    url("../assets/notfound1.jpg") no-repeat center center/cover;
  height: 100vh;
}
.btn {
  font-size: 1.3rem;
  margin-top: 3rem;
}

.notfoundtext {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
