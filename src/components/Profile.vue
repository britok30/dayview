<template>
  <div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
      loading: false,
      profile: []
    };
  },
  async created() {
    this.loading = true;
    axios.get (``)
   
  }
};
</script>

<style></style>
