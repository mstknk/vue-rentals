<template>
  <div class="container">
    <div class="header-content">
      <img alt="Vue logo" class="logo" src="../assets/logo.png" />

      <h1>Welcome to Vue Rentals!</h1>
      <p>
        We hope you find exactly what you're looking for in a place to stay.
      </p>
    </div>

    <div>
      <div class="search-content">
        <span> Where would you like to stay?</span>
        <input placeholder="Search for rentals"/>
      </div>
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
  padding: 50px;
  background: #f6f6f6;
}
.container {
  max-width: 1024px;
  min-height: 100vh;
  background: #f9f9f9;
  margin: 0 auto;
}
.logo {
  float: right;
  background-size: contain;
  height: 200px;
  width: 200px;
  top: -25px;
}

.search-content span {
  font-size: 140%;
  margin: 50px auto 20px;
  display: block;
  text-align: center;
  font-style: italic;
}

.search-content input {
  padding: 11px;
  font-size: 18px;
  width: 500px;
  margin: 20px auto 50px;
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid #d3d3d3;
  display: block;
    height: 44px;
    padding: 0 36px 0 23px;
    font-size: 20px;
    border: 2px solid #bbb;
    border-radius: 30px;
    transition: all .2s ease-out;
}
</style>