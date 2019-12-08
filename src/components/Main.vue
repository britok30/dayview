<template>
  <div>
    <header id="header">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link
          class="navbar-brand"
          to="/"
          v-scroll-reveal.reset="animate1"
        >
          <span class="bold">Bay</span><span class="poiret">ViewTimes</span>
        </router-link>
      </nav>

      <div class="header-text">
        <h1 v-scroll-reveal.reset="animate2">
          Your
          <span class="bold">Bay</span>
          starts here
        </h1>
      </div>
    </header>
    <SearchNews />
    <Stocks />
    <Weather />
    <AppStore />
    <BayView />
    <Footer />
  </div>
</template>

<script>
import SearchNews from "../components/News/SearchNews";
import Stocks from "../components/Stocks/Stocks";
import Weather from "../components/Weather/Weather";
import AppStore from "../components/AppStore/AppStore";
import BayView from "../components/BayView/BayView";
import Footer from "../components/Footer";

export default {
  name: "Main",
  components: {
    SearchNews,
    Stocks,
    Weather,
    AppStore,
    BayView,
    Footer
  },
  data() {
    return {
      animate1: {
        delay: 350,
        duration: 3500,
        origin: "bottom",
        distance: "30px"
      },
      animate2: {
        delay: 1500,
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
  font-size: 3.5rem;
  font-weight: 200;
}

.bold {
  font-weight: 600;
  color: rgb(233, 113, 66);
}

.poiret {
  font-family: "Poiret One", sans-serif;
}

#header {
  height: 110vh;
  background: linear-gradient(rgba(0, 0, 0, 0.411), rgba(0, 0, 0, 0.411)),
    url("../assets/hero.jpg") no-repeat center center/cover;
}

h1 {
  font-weight: 200;
  font-size: 9rem;
  letter-spacing: 7px;
  text-align: left;
}

.header-text {
  position: absolute;
  top: 50%;
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
