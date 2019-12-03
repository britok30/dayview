<template>
  <header id="header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="/" v-scroll-reveal.reset="animate1">
        <span class="bold">Day</span>View
      </a>
    </nav>
    <h1 v-scroll-reveal.reset="animate2">
      Welcome
    </h1>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      animate1: {
        delay: 350,
        duration: 3500,
        origin: "bottom",
        distance: "30px"
      },
      animate2: {
        delay: 1000,
        duration: 3500,
        origin: "bottom",
        distance: "30px"
      }
    };
  }
};
</script>

<style scoped>
.navbar-brand {
  font-size: 2.5rem;
  font-weight: 200;
}

.logo {
  font-size: 2.5rem;
}

.bold {
  font-weight: 400;
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
  font-size: 5rem;
  letter-spacing: 7px;
}
</style>
