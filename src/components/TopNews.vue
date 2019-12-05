<template>
  <div class="topnews">
    <div class="row">
      <div class="col-md-12" v-if="topNews">
        <div class="media news" v-for="(news, i) in topNews" :key="i">
          <img v-if="news.urlToImage" :src="news.urlToImage" class="mr-3 newsimg" alt="..." />
          <img v-if="news.urlToImage == null" src="../assets/news.gif" class="mr-3 newsimg" alt="..." />
          <div class="media-body">
            <h3 class="mt-0">{{ news.title }}</h3>
            <p>{{ news.description }}</p>
            <a :href="news.url">News Article</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TopNews",
  data() {
    return {
      loading: false,
      topNews: [],
      pageSize: 10,
      altimg: "../assets/news.gif"
    };
  },
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

<style scoped>
.newsimg {
  width: 30%;
  border-radius: 5px;
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

.news {
  margin: 4rem 0;
}

</style>
