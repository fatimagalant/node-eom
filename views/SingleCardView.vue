<template>
  <div v-if="car" class="container">
    <div class="card shadow mb-3">
      <img :src="car.image" class="car-img mb-2" alt="Picture of car" />
      <h5 class="text-black">{{ car.name }}</h5>
      <p class="text-secondary">
        {{ car.catergory }}
      </p>
      <p>{{ car.description }}</p>
      <p>R{{ car.price }}</p>
      <!-- <input type="number" placeholder="qty" v-model="qty" /> -->
      <button @click="addToCart(car)" class="btn mb-3">
        <i class="fa-solid fa-cart-arrow-down"></i>
        <span class="btn2">Add</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    car() {
      return this.$store.state.car;
    },
  },
  methods: {
    addToCart(car) {
      this.$store.commit("updateCart", car);
    },
  },
  mounted() {
    this.$store.dispatch("getSinglecar", this.id);
  },
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

a {
  text-decoration: none;
}

.card {
  color: black;
  width: 30%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.card p {
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#cars {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
}
.car-img {
  height: 275px;
  aspect-ratio: 1;
}
@media screen and (max-width: 800px) {
  .card {
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>
