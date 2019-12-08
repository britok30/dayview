<template>
  <div class="newsapp">
    <div class="row">
      <div class="col-md-7 gif" v-scroll-reveal.reset="animate1"></div>
      <div class="col-md-5" v-scroll-reveal.reset="animate2">
        <h2>Your News On The Go</h2>
        <img class="appstore" src="../../assets/appleapp.png" alt="appstore" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsApp",
  data(){
    return {
       animate1: {
        delay: 350,
        duration: 3500,
        origin: "bottom",
        distance: "30px"
      },
      animate2: {
        delay: 1500,
        duration: 3500,
        origin: "bottom",
        distance: "30px"
      }
    }
  }
};
</script>

<style scoped>
.newsapp {
  margin-top: 4rem;
}
.gif {
  background: url("../../assets/app.gif") no-repeat center center/cover;
  height: 50vh;
  border-radius: 5px;
}

.appstore {
  width: 50%;
  padding-top: 4rem;
  display: block;
  margin: auto;
}

h2 {
  font-size: 5rem;
  text-align: center;
  font-weight: 600;
  color: rgb(233, 113, 66);
}
</style>
