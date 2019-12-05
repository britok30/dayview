<template>
  <section id="news">
    <h2 class="lead-head">Your News</h2>
    <div class="row">
      <div class="col-md-6">
        <h2 class="top-lead">Top News</h2>
        <TopNews />
      </div>

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
              <img v-if="news.urlToImage" :src="news.urlToImage" class="mr-3 newsimg" alt="..." />
              <img
                v-if="news.urlToImage == null"
                src="../assets/news.gif"
                class="mr-3 newsimg"
                alt="..."
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
    </div>
  </section>
</template>

<script>
import axios from "axios";
import TopNews from "../components/TopNews";

export default {
  name: "SearchNews",
  components: {
    TopNews
  },
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

.top-lead {
  margin: 3rem 0;
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
  font-size: 2rem;
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
   color: rgb(233, 113, 66);
}

p {
  font-size: 1.3rem;
}

a {
  font-size: 1.2rem;
}
.newsimg {
  width: 30%;
  border-radius: 5px;
}
</style>
