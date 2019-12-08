<template>
  <div class="newsapp">
    <div class="row">
      <div class="col-md-7 gif"></div>
      <div class="col-md-5">
        <h2>Your news on the go</h2>
        <img class="appstore" src="../../assets/appleapp.png" alt="appstore" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsApp"
};
</script>

<style scoped>
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
  font-size: 4rem;
  text-align: center;
  font-weight: 600;
  color: rgb(233, 113, 66);
}
</style>
