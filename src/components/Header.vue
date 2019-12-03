<template>
  <header id="header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="/">
        <ion-icon name="logo-apple" class="logo"></ion-icon>Music.vue
      </a>
    </nav>
    <h1>Welcome</h1>
  </header>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar-brand {
  font-size: 4.3rem;
  font-weight: 200;
}

.logo {
  font-size: 4.3rem;
}

#header {
  height: 75vh;
  background: linear-gradient(rgba(0, 0, 0, 0.311), rgba(0, 0, 0, 0.311)),
    url("../assets/hero.jpg") no-repeat center center/cover;
}

h1 {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 200;
  font-size: 4rem;
  letter-spacing: 5px;
}
</style>

