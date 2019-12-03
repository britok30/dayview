<template>
  <div>
    Profile
  </div>
</template>

<script>
// import axios from "axios";

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
   
  }
};
</script>

<style></style>
