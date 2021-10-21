<template>
  <div v-if="rental">
    <h1>{{ rental.title }}</h1>
    <p>{{ rental.location }} {{ rental.type }} {{ rental.owner }}</p>
    <p>{{ rental.description }}</p>
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
