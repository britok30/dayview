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
  data() {},
  created() {
    this.loading = true;
    return axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_NEWS_API_KEY}&pageSize=${this.pageSize}`
      )
      .then(res => {
        console.log(res.data.articles);
        this.topNews = res.data.articles;
        this.loading = false;
      });
  }
};
</script>

<style>
</style>