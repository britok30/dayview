<template>
  <div>
    <StocksShow />
    <div class="row">
      <div class="col-md-4" v-for="stock in stocks" :key="stock.symbol">
        <div class="card" v-scroll-reveal.reset="animate1">
          <img src="../../assets/cards.jpg" class="card-img-top stock-img" alt="..." />
          <div class="card-body">
            <h3 class="card-title">{{stock.name}}</h3>
            <p class="card-text">Symbol: {{stock.symbol}}</p>
            <p class="card-text">Price: {{stock.price}}</p>
            <p class="card-text">Day High: {{stock.day_high}}</p>
            <p class="card-text">Day Low: {{stock.day_low}}</p>
            <p class="card-text">52 Week High: {{stock["52_week_high"]}}</p>
            <p class="card-text">52 Week Low: {{stock["52_week_low"]}}</p>
            <p
              class="card-text"
            >Market Cap: {{stock.market_cap.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}}</p>
            <p
              class="card-text"
            >Volume: {{stock.volume.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}}</p>
            <p class="card-text">Stock Exchange: {{stock.stock_exchange_short}}</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
     <div class="row">
      <SearchStocks />
    </div>
  </div>
</template>

<script>
import StocksShow from "./StocksShow";
import SearchStocks from "./SearchStocks";
import axios from "axios";

export default {
  name: "Stocks",
  components: {
    StocksShow,
    SearchStocks
  },
  data() {
    return {
      symbol: "",
      stocks: "",
      animate1: {
        delay: 350,
        duration: 3500,
        origin: "bottom",
        distance: "30px"
      }
    };
  },
  created() {
    this.loading = true;
    return axios
      .get(
        `https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,AAPL&api_token=${process.env.VUE_APP_STOCKS_API_KEY}`
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
  padding: 3rem 0;
  font-weight: 600;
  font-size: 3rem;
  color: rgb(233, 113, 66);
}

p {
  font-size: 1.5rem;
}
</style>