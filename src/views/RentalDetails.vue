<template>
  <div class="container">
    <div class="header-content">
      <img alt="Vue logo" class="logo" src="../assets/logo.png" />

      <h1>{{ rental.title }}</h1>
      <p>
        Nice find! This looks like a nice place to stay near
        {{ rental.location }} .
      </p>
    </div>

    <div class="detail-container">
      <div class="image">
        <img :src="rental.image" class="image" />
      </div>
      <div v-if="rental" class="details">
        <h3>About {{ rental.title }}</h3>
        <span>Owner : {{ rental.owner }}</span>
        <span>Type: {{ rental.type }}</span>
        <span>Location :{{ rental.location }}</span>

        <span>Description : {{ rental.description }}</span>
        <span>Rooms : {{ rental.rooms }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import RentalService from "@/services/RentalService.js";

export default {
  props: ["id"],
  data() {
    return {
      rental: null,
    };
  },
  created() {
    RentalService.getRental(this.id)
      .then((response) => {
        this.rental = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
/** TODO check dublicate css styles */
.container {
  max-width: 1024px;
  min-height: 100vh;
  background: #f9f9f9;
  margin: 0 auto;
}
.header-content {
  padding: 50px;
  background: #f6f6f6;
}
.logo {
  float: right;
  background-size: contain;
  height: 200px;
  width: 200px;
  top: -25px;
}
.detail-container {
  margin-top: 15px;
  background-color: #f6f6f6;
  padding: 20px 25px;
  display: flex;
  align-content: center;
  align-items: center;
  background: 0 0;
  align-items: flex-start;
}
.details {
  flex-basis: 50%;
  flex-grow: 2;
  display: flex;
  height: 120px;
  margin: 20px 25px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-around;
}
.image {
  flex-basis: 320px;
  max-width: 100%;
}
</style>