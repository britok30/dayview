<template>
  <div class="col-md-12 search">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="stocks">Search Stocks</label>
        <input
          class="search-stocks"
          type="text"
          name="stocks"
          v-model="searchTerm"
          placeholder="Enter company ticker (ex. Apple = 'AAPL')"
        />
      </div>
    </form>

    <div class="row">
      <div class="col-md-12" v-if="searchStocks">
        <div class="media stocks" v-scroll-reveal.reset="animate1">
          <img src="../../assets/searchstocks.jpg" class="mr-3 newsimg" alt="..." />
          <div class="media-body">
            <h3 class="mt-0">{{ searchStocks.name}}</h3>
          </div>
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
</style>
