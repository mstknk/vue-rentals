<template>
  <div class="container" v-if="rental">
    <div class="header-content">
      <img alt="Vue logo" class="logo" src="../assets/logo.png" />

      <h1>{{ rental.propertyDescription.name }}</h1>
      <p>
        Nice find! This looks like a nice place to stay near
        {{ rental.pdpHeader.hotelLocation.locationName }} .
      </p>
    </div>

    <div class="detail-container">
      <div class="image">
        <img
          src="https://exp.cdn-hotels.com/hotels/1000000/30000/27300/27274/cb8526cf_w.jpg"
          class="image"
        />
      </div>
      <div v-if="rental" class="details">
        <span>
          {{ rental.propertyDescription.featuredPrice.currentPrice.formatted }}
        </span>
        <span>{{
          rental.propertyDescription.featuredPrice.pricingAvailability
        }}</span>
        <span>{{ rental.pdpHeader.hotelLocation.locationName }}</span>
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
      images: null,
    };
  },
  created() {
    RentalService.getRental(this.id)
      .then((response) => {
        this.rental = response.data.data.body;
      })
      .catch((error) => {
        console.log(error);
      });

    RentalService.getImages(this.id)
      .then((response) => {
        console.log(response.data);
        this.images = response.data;
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