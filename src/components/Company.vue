<template>
  <div class="search">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="company">Search Company News</label>
        <input
          class="search-company"
          type="text"
          name="company"
          v-model="q"
          placeholder="Enter Company"
        />
      </div>
    </form>

    <div class="row company">
      <div class="info-container">
        <div class="col-md-12" v-if="companyNews">
          <div class="media" v-for="(news, i) in companyNews" :key="i">
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Company",
  data() {
    return {
      loading: false,
      q: "",
      companyNews: [],
      pageSize: 10
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      return axios
        .get(
          `https://newsapi.org/v2/top-headlines?q=${this.q}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`
        )
        .then(res => {
          console.log(res.data.articles);
          this.companyNews = res.data.articles;
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

.search-company {
  padding: 1rem;
  width: 100%;
  font-size: 1.5rem;
  border-radius: 10px;
  border: 1px solid #000;
}

label {
  font-size: 1.5rem;
}

.company {
  margin-top: 3rem;
}

ul {
  list-style: none;
}

ul li {
  font-size: 1.4rem;
  padding: 1rem 0;
  color: #fff;
}

h5 {
  font-size: 1.3rem;
  color: #fff;
}

.newsimg {
  width: 10%;
}
</style>
