<template>
  <header id="header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="/" v-scroll-reveal.reset="animate1">
        <span class="bold">Day</span>View <br />
        <p class="date">{{ moment }}</p>
      </a>
    </nav>

    <div class="header-text">
      <h1 v-scroll-reveal.reset="animate2">
        Welcome
      </h1>
      <p class="header-info" v-scroll-reveal.reset="animate3">Top source for daily financial news and stocks</p>
    </div>
  </header>
</template>

<script>
import moment from "moment";

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
      },
       animate3: {
        delay: 1500,
        duration: 3500,
        origin: "bottom",
        distance: "30px"
      }
    };
  },
  computed: {
    moment: function() {
      return moment().format("dddd, MMMM Do YYYY, h:mm a");
    }
  }
};
</script>

<style scoped>
.navbar-brand {
  font-size: 3.5rem;
  font-weight: 200;
}

.bold {
  font-weight: 400;
}

#header {
  height: 85vh;
  background: linear-gradient(rgba(0, 0, 0, 0.511), rgba(0, 0, 0, 0.511)),
    url("../assets/hero.jpg") no-repeat center center/cover;
}

h1 {
  font-weight: 200;
  font-size: 5rem;
  letter-spacing: 7px;
  text-align: center;
}

.header-text {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header-info {
  text-align: center;
  font-size: 2rem;
  font-weight: 200;
}

.date {
  font-weight: 200;
  font-size: 1.3rem;
}
</style>
