<template>
  <div class="col-md-6 search">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="company">Search News</label>
        <input
          class="search-company"
          type="text"
          name="company"
          v-model="searchTerm"
          placeholder="Enter Company"
        />
      </div>
    </form>

    <div class="row company">
      <div class="col-md-12" v-if="searchResults">
        <div class="media" v-for="(news, i) in searchResults" :key="i">
          <img :src="news.urlToImage" class="mr-3 newsimg" alt="..." />
          <div class="media-body">
            <h5 class="mt-0">{{ news.title }}</h5>
            <p>{{ news.description }}</p>
            <p>{{news.url}}</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchNews",
  data() {
    return {
      loading: false,
      topNews: [],
      pageSize: 8
    };
  },
  methods: {
    created() {
      this.loading = true;
      return axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_NEWS_API_KEY}&pageSize=${pageSize}`
        )
        .then(res => {
          console.log(res.data.articles);
          this.topNews = res.data.articles;
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
</style>
