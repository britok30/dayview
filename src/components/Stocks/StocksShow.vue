<template>
  <div class="showcase">
    <h2 class="lead-head">Stocks</h2>
  </div>
</template>

<script>
export default {
  name: "StocksShow"
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