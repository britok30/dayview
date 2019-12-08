<template>
  <div class="bayview">
    <div class="row">
      <div class="col-md-5">
        <h1 class="baylead" v-scroll-reveal.reset="animate1">
          <span class="bold">Bay</span>
        </h1>
        <h1 class="poiret" v-scroll-reveal.reset="animate1">View</h1>
        <h1 class="poiret" v-scroll-reveal.reset="animate1">Times</h1>
      </div>
      <div class="col-md-7">
        <video class="bay" autoplay loop muted>
          <source src="../../assets/east-coast.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BayView",
  data() {
    return {
      animate1: {
        delay: 350,
        duration: 3500,
        origin: "bottom",
        distance: "30px"
      }
    };
  }
};
</script>

<style scoped>
.bayview {
  margin-top: 15rem;
}

.baylead {
  font-size: 12rem;
}
.bay {
  width: 100%;
  border-radius: 5px;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}

.bold {
  font-weight: 600;
  color: rgb(233, 113, 66);
}

.poiret {
  font-family: "Poiret One", sans-serif;
  font-size: 10rem;
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px #000;
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px #31313181;
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px #000;
    transform: translatey(0px);
  }
}
</style>
