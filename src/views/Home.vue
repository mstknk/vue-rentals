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
/***/
export default {
  name: "Home",
  components: {
    RentalCard,
  },
  data() {
    return {
      rentals: [
        {
          id: 1,
          title: "Grand Old Mansion",
          description:
            "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.",
          owner: "Veruca Salt",
          type: "Standalone – Estate",
          rooms: 15,
          location: "San Francisco",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        },
        {
          id: 2,
          title: "Urban Living",
          description:
            "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.",
          owner: " Mike Teavee",
          type: "Community – Condo",
          rooms: 2,
          location: "Seattle",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Seattle_-_Barnes_and_Bell_Buildings.jpg",
        },
        {
          id: 3,
          title: "Downtown Charm",
          description:
            "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.",
          owner: "Violet Beauregarde",
          type: "Community – Apartment",
          rooms: 4,
          location: "Portland",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
        },
      ],
    };
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