<template>
  <div class="col-md-12 search">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="stocks">Search Stocks</label>
        <input
          class="search-stocks"
          type="text"
          name="stocks"
          v-model="stockSymbol"
          placeholder="Enter company ticker (ex. Apple = 'AAPL')"
        />
      </div>
    </form>

    <div class="col-md-12" v-if="searchStocks !== null">
      <div
        class="media stockmedia"
        v-scroll-reveal.reset="animate1"
        v-for="(stock, i) in searchStocks"
        :key="i"
      >
        <img
          src="../../assets/searchstocks.jpg"
          class="mr-3 stockimg"
          alt="stock image"
        />
        <div class="media-body">
          <h3 class="mt-0">{{ stock.name }}</h3>
          <p>Symbol: {{ stock.symbol }}</p>
          <p>Last Trade Time: {{ stock.last_trade_time }}</p>
          <p>Price: {{ stock.price }}</p>
          <p>Day High: {{ stock.day_high }}</p>
          <p>Day Low: {{ stock.day_low }}</p>
          <p>52 Week High: {{ stock["52_week_high"] }}</p>
          <p>52 Week Low: {{ stock["52_week_low"] }}</p>
          <p>
            Market Cap:
            {{
              stock.market_cap
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            }}
          </p>
          <p>
            Volume:
            {{
              stock.volume.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            }}
          </p>
          <p>Stock Exchange: {{ stock.stock_exchange_short }}</p>
        </div>
      </div>
    </div>

    <div class="col-md-12" v-if="searchStocks == null">
      <div class="media stockmedia" v-scroll-reveal.reset="animate1">
        <img
          src="../../assets/notfound.jpg"
          class="mr-3 stockimg"
          alt="stock image"
        />
        <div class="media-body">
          <h1 class="notfound">Request Not Found</h1>
          <p>
            The request you've put in could not be found. Please make sure to
            enter the correct company ticker! (Ex. Tesla = "TSLA")
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchStocks",
  data() {
    return {
      searchStocks: "",
      stockSymbol: "",
      animate1: {
        delay: 350,
        duration: 3000,
        origin: "bottom",
        distance: "30px"
      }
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      if (!this.stockSymbol) {
        this.$toasted.show("Please enter a company ticker", {
          duration: 3000,
          icon: "exclamation-circle"
        });
      } else {
        return axios
          .get(
            `https://api.worldtradingdata.com/api/v1/stock?symbol=${this.stockSymbol.toUpperCase()}&api_token=${
              process.env.VUE_APP_STOCKS_API_KEY
            }`
          )
          .then(res => {
            console.log(res.data.data);
            this.searchStocks = res.data.data;
            this.loading = false;
          });
      }
    }
  }
};
</script>

<style scoped>
.search {
  margin: 3rem 0;
}

.search-stocks {
  padding: 1rem;
  width: 100%;
  font-size: 1.5rem;
  border-radius: 10px;
  border: 1px solid #000;
}

input:focus {
  outline: none;
}

label {
  font-size: 2.3rem;
  letter-spacing: 4px;
}

.stockimg {
  width: 60%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

h3 {
  font-size: 4rem;
  padding: 2rem 0;
}

p {
  font-size: 1.5rem;
}

.stockmedia {
  background: #181818;
  border-radius: 5px;
}

.notfound {
  font-size: 4rem;
}
</style>
