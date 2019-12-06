<template>
  <div>
    <StocksShow />
    <div class="row">
      <div class="col-md-4" v-for="stock in stocks" :key="stock.symbol">
        <div class="card">
          <img src="../../assets/hero.jpg" class="card-img-top stock-img" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Company: {{stock.name}}</h4>
            <p class="card-text">Symbol: {{stock.symbol}}</p>
            <p class="card-text">Price: {{stock.price}}</p>
            <p class="card-text">Day High: {{stock.day_high}}</p>
            <p class="card-text">Day Low: {{stock.day_low}}</p>
            <p class="card-text">Day Low: {{stock.day_low}}</p>
            <p class="card-text">Market Cap: {{stock.market_cap.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}}</p>
            <p></p>
          </div>
        </div>
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

<style scoped>
.card {
  border-radius: 5px;
  margin-top: 4rem;
  background: #252525;
}

.stock-img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

h3 {
  color: #000;
  padding-top: 3rem;
}
</style>