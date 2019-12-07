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
      <div class="col-md-6" v-if="weather">
        <div class="card" v-scroll-reveal.reset="animate1">
          <img
            src="../../assets/weather.png"
            class="card-img-top weatherimg"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title city">{{ weather.name }}</h5>
            <p class="card-text cityweather">
              Weather: {{ weather.weather[0].main }} |
              {{ weather.weather[0].description }}
            </p>
            <p class="card-text temp">
              {{ Math.round(weather.main.temp) }}&deg; F
            </p>
            <p class="card-text">
              Min. Temp: {{ Math.round(weather.main.temp_min) }} &deg; F
            </p>
            <p class="card-text">
              Max Temp: {{ Math.round(weather.main.temp_max) }} &deg; F
            </p>
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
      weather: "",
      city: "",
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
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=${process.env.VUE_APP_WEATHER_API_KEY}`
        )
        .then(res => {
          console.log(res.data);
          this.weather = res.data;
          this.loading = false;
        });
    }
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

.card {
  background: #181818;
  border-radius: 5px;
}

.weatherimg {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.city {
  font-size: 6rem;
  font-weight: 600;
}

.temp {
  font-size: 6rem;
  font-weight: 600;
}

.cityweather {
    font-size:  1.6rem;
    font-weight: 600;
}

p {
  font-size: 1.4rem;
}
</style>
