<template>
  <section id="news">
    <h2 class="lead-head">Your News</h2>
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

      <div class="row">
        <div class="col-md-12" v-if="searchResults">
          <div class="media news" v-for="(news, i) in searchResults" :key="i">
            <img
              :src="news.urlToImage != null ? news.urlToImage : altimg"
              class="mr-3 newsimg"
              alt="news image"
            />
            <div class="media-body">
              <h3 class="mt-0">{{ news.title }}</h3>
              <p>{{ news.description }}</p>
              <a :href="news.url">News Article</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchNews",
  data() {
    return {
      loading: false,
      searchTerm: "",
      searchResults: [],
      pageSize: 10,
      altimg: "../assets/news.gif"
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
#news {
  margin-top: 4rem;
}

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

.news {
  margin: 4rem 0;
}

.lead-head {
  font-size: 4rem;
  font-weight: 700;
  color: rgb(233, 113, 66);
}

h3 {
  font-size: 2.5rem;
}

p {
  font-size: 1.3rem;
}

a {
  font-size: 1.2rem;
}
.newsimg {
  width: 30%;
}
</style>
