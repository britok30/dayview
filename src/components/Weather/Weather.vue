<template>
  <div>
    <WeatherShow />
    <div class="row">
      <div class="col-md-6 search">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="weather">Search City</label>
            <input
              class="search-weather"
              type="text"
              name="weather"
              v-model="city"
              placeholder="Enter city name"
            />
          </div>
        </form>
      </div>
      <div class="col-md-6" v-for="weather in weatherData" :key="weather">
        <div class="card">
          <img src="../../assets/weather.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherShow from "./WeatherShow";
import axios from "axios";

export default {
  name: "Weather",
  components: {
    WeatherShow
  },
  data() {
    return {
      loading: true,
      weatherData: "",
      city: "London",
      zip: ""
    };
  },
  created() {
    this.loading = true;
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${process.env.VUE_APP_WEATHER_API_KEY}`
      )
      .then(res => {
        console.log(res.data);
        this.weatherData = res.data;
        this.loading = false;
      });
  }
};
</script>

<style scoped>
.search,
.card {
  margin: 3rem 0;
}

.search-weather {
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
