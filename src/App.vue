<template>
  <div id="app">
    <Header />
    <div class="container">
      <SearchNews />
      <Stocks />
      <Weather />
      <AppStore />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import SearchNews from "./components/News/SearchNews";
import Stocks from "./components/Stocks/Stocks";
import Weather from "./components/Weather/Weather";
import AppStore from "./components/AppStore/AppStore";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    SearchNews,
    Stocks,
    Weather,
    AppStore,
    Footer
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
  background: #000;
  color: #fff;
}
</style>
