<template>
  <section id="stocks">
    <div class="row">
      <div class="col-md-12 search">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="stocks">Search Stocks</label>
            <input
              class="search-company"
              type="text"
              name="stocks"
              v-model="searchTerm"
              placeholder="Enter company ticker (ex. Apple = 'AAPL')"
            />
          </div>
        </form>

        <div class="row">
          <div class="col-md-12" v-if="searchResults">
            <div
              class="media stocks"
              v-scroll-reveal.reset="animate1"
            >
              <img src="../../assets/searchstocks.jpg" class="mr-3 newsimg" alt="..." />
              <div class="media-body">
                <h3 class="mt-0">{{ news.title }}</h3>
                <p>{{ news.description }}</p>
                <a :href="news.url">News Article</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchStocks",
  data() {
    return {
      loading: false,
      searchTerm: "",
      searchResults: [],
      pageSize: 10,
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
          `https://newsapi.org/v2/everything?q=${this.searchTerm}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}&pageSize=${this.pageSize}`
        )
        .then(res => {
          console.log(res.data.articles);
          this.searchResults = res.data.articles;
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
