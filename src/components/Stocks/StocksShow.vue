<template>
  <div class="showcase" v-scroll-reveal.reset="animate1">
    <h2 class="lead-head">Stocks</h2>
  </div>
</template>

<script>
export default {
  name: "StocksShow",
  data(){
    return {
      animate1: {
        delay: 350,
        duration: 3500,
        origin: "bottom",
        distance: "30px"
      }
    }
  }
};
</script>

<style scoped>
.showcase {
  background: linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)),
    url("../../assets/stocks.jpg") no-repeat center center/cover;
  height: 60vh;
  position: relative;
  border-radius: 5px;
}

.lead-head {
  font-size: 5rem;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>