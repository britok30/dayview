<template>
  <div class="search">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="company">Lookup Company</label>
        <input
          class="search-company"
          type="text"
          name="company"
          v-model="company"
          placeholder="Search Company"
        />
      </div>
    </form>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
      loading: false,
      company: ""
    };
  },
  methods: {
    onSubmit() {
      return console.log("Submitted")
    }
  }
};
</script>

<style>
.search {
  margin-top: 3rem;
}

.search-company {
  padding: 1rem;
  width: 100%;
  font-size: 1.5rem;
  border-radius: 10px;
  border: 1px solid #000;
}

label {
  font-size: 1.3rem;
}
</style>
