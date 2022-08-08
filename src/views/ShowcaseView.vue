<template>
  <div class="d-flex flex-row justify-content-center align-items mt-3 mb-3">
    <button class="form-control btn mb-3 me-3 btn-sm" @click="sortByPrice">
      Sort By Price
    </button>
    <input
      type="text"
      class="form-control"
      placeholder="Search..."
      v-model="search"
    />
    <select v-model="category">
      <option value="All" selected>All</option>
      <option value="JDM">JDM</option>
    </select>
  </div>
  <div v-if="filteredcars" class="container d-flex flex-row gap-5">
    <carCard v-for="car in filteredcars" :key="car.id" :car="car" />
  </div>
</template>
<script>
import carCard from "@/components/CarCard.vue";
export default {
  data() {
    return {
      search: "",
      category: "All",
    };
  },
  components: {
    carCard,
  },

  mounted() {
    this.$store.dispatch("getCars");
  },
  computed: {
    filteredCars() {
      return this.$store.state.cars?.filter((car) => {
        let isMatch = true;
        if (!car.name?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.category !== "All" && car.category !== this.category)
          isMatch = false;
        return isMatch;
      });
    },
  },
  methods: {
    sortByPrice() {
      //gives function a name (does not need to be the same as the name given in the store)
      this.$store.commit("sortByPrice"); //runs the function in the store
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  text-align: center;
  flex-wrap: wrap;
}
.card {
  columns: #42b983;
}
.form-control {
  width: 30%;
  height: 50px;
}
@media screen and (max-width: 800px) {
  .property-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
.btn {
  width: 150px;
}
select[data-v-3ec79cde] {
  height: 45px;
  margin-top: 1px;
  margin-left: 5px;
}
</style>
