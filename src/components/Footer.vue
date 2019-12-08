<template>
  <div class="footer">
    <p v-scroll-reveal.reset="animate1">BayViewTimes &copy;</p>
    <p v-scroll-reveal.reset="animate1">
      Powered by
      <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer"
        >News Api</a
      >,
      <a
        href="https://www.worldtradingdata.com/"
        target="_blank"
        rel="noopener noreferrer"
        >World Trading Data</a
      >, & <a href="https://openweathermap.org/">OpenWeatherMap</a>
    </p>
    <p v-scroll-reveal.reset="animate1">Code & Design by Brito</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      animate1: {
        delay: 350,
        duration: 3500,
        origin: "bottom",
        distance: "30px"
      }
    };
  }
};
</script>

<style scoped>
p {
  text-align: center;
  font-size: 1.15rem;
}

.footer {
  padding: 40rem 0 10rem 0;
}
</style>
