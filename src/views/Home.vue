<template>
  <div class="container">
    <div class="header-content">
      <h1>Welcome to Vue Rentals!</h1>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    Where would you like to stay?
    <input />

    <div>
      <RentalCard v-for="rental in rentals" :key="rental.id" :rental="rental" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RentalCard from "@/components/RentalCard.vue";
import RentalService from "@/services/RentalService.js";
/***/
export default {
  name: "Home",
  components: {
    RentalCard,
  },
  data() {
    return {
      rentals: null,
    };
  },
  created() {
    RentalService.getRentals()
      .then((response) => {
        this.rentals = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.header-content {
  display: flex;
  flex-direction: initial;
  align-items: center;
}
.container {
  max-width: 1024px;
  min-height: 100vh;
  background: #f9f9f9;
  margin: 0 auto;
}

.rental h3 {
  flex-basis: 100%;
}
</style>