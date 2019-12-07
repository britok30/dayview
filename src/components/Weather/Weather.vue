<template>
  <div>
    <WeatherShow />
      <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="weather">Search Stocks</label>
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
