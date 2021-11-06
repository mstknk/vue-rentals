<template>
  <div class="rental" v-if="rental">
    <div class="image">
      <img :src="rental.optimizedThumbUrls.srpDesktop" />
    </div>
    <div class="details">
      <router-link :to="{ name: 'RentalDetails', params: { id: rental.id } }">
        <div>
          <h3>{{ rental.name }}</h3>
        </div>
      </router-link>
      <div>
        <span>
          {{ rental.address.streetAddress }} , {{ rental.address.locality }},
          {{ rental.address.postalCode }}, {{ rental.address.region }}</span
        >
      </div>

      <div>
        <span> {{ rental.ratePlan.price.current }}</span>
      </div>
      <div>
        <span>Star Rating: </span>
        {{ rental.starRating }}
      </div>
      <div>
        <span>Guest Reviews: </span>
        {{ rental.guestReviews.badgeText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rental: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.rental {
  margin-top: 15px;
  background-color: #f6f6f6;
  padding: 20px 25px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.rental .image img {
  max-width: 100%;
}
.rental .image {
  flex-grow: 0;
  flex-basis: 150px;
  margin: 20px 25px;
  text-align: center;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 372px;
  width: 310px;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 372px;
  width: 310px;
}
.rental .details {
  flex-basis: 50%;
  flex-grow: 2;
  display: flex;
  height: 150px;
  margin: 20px 25px;
  align-content: space-around;
  flex-direction: column;
}

.rental h3 {
  flex-basis: 100%;
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>
