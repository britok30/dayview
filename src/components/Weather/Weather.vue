<template>
  <div>
    <WeatherShow />
  </div>
</template>

<script>
import WeatherShow from "./WeatherShow";

export default {
  name: "Weather",
  components: {
    WeatherShow
  },
  data() {
    return {
      city: "",
      zip: ""
    };
  }
};
</script>

<style scoped></style>
