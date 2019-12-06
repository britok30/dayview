<template>
  <div>
    <StocksShow />
    <div class="row">
      <div class="col-md-6 stock-container">
        
      </div>
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
      stocks: ""
    };
  },
  created() {
    this.loading = true;
    return axios
      .get(
        `https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=${process.env.VUE_APP_STOCKS_API_KEY}`
      )
      .then(res => {
        console.log(res.data.data);
        this.stocks = res.data.data;
        this.loading = false;
      });
  }
};
</script>

<style>
.stock-container {
  margin-top: 3rem;
  background-color: #fff;
  height: 30vh;
  border-radius: 5px;
}

h3 {
  color: #000;
  padding-top: 3rem;
}
</style>