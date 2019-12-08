<template>
  <div class="bayview">
    <div class="row">
      <div class="col-md-5">
        <h1 class="baylead"><span class="bold">Bay</span></h1>
        <h1 class="poiret">View</h1>
        <h1 class="poiret">Times</h1>
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
    return {};
  }
};
</script>

<style scoped>
.bayview {
  margin-top: 8rem;
}

.baylead {
  font-size: 10rem;
}
.bay {
  width: 100%;
  border-radius: 5px;
}

.bold {
  font-weight: 600;
  color: rgb(233, 113, 66);
}

.poiret {
  font-family: "Poiret One", sans-serif;
  font-size: 10rem;
}
</style>
