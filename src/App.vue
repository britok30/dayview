<template>
  <div id="app">
    <Header />
    <div class="container">
      <Profile />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Profile from "./components/Profile";

export default {
  name: "app",
  components: {
    Header,
    Profile
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Montserrat", sans-serif;
  background: #181818;
  color: #fff;
}
</style>
