<template>
  <div>
    <StocksShow />
    <div class="row">
      <div class="col-md-6"></div>
    </div>
  </div>
</template>

<script>
import StocksShow from "./StocksShow";
import axios from "axios";

export default {
  name: "Stocks",
  components: {
    StocksShow
  },
  data() {
    return {
      symbol: "",
      function: "TIME_SERIES_INTRADAY",
      interval: "5min"
    };
  },
  created() {
    this.loading = true;
    return axios
      .get(
        `https://www.alphavantage.co/query?function=${this.function}&symbol=${this.symbol}&interval=${this.interval}&apikey=${process.env.VUE_APP_STOCKS_API_KEY}`
      )
      .then(res => {
        console.log(res.data);
        this.topNews = res.data;
        this.loading = false;
      });
  }
};
</script>

<style>
</style>