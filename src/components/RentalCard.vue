<template>
  <div class="rental" v-if="rental">
    <div class="image">
      <img :src="rental.image" />
    </div>
    <div class="details">
      <router-link :to="{ name: 'RentalDetails', params: { id: rental.id } }">
        <div>
          <h3>{{ rental.title }}</h3>
        </div>
      </router-link>
      <div>
        <span>Owner: </span>
        {{ rental.owner }}
      </div>

      <div>
        <span>Type: </span>
        {{ rental.type }}
      </div>
      <div>
        <span>Location: </span>
        {{ rental.location }}
      </div>
      <div>
        <span>Number of Rooms: </span>
        {{ rental.rooms }}
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
