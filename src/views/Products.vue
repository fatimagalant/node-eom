<template>
  <div id="products">
    <Navbar />
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
        <option value="Starter">Starter</option>
        <option value="Main">Main</option>
        <option value="Dessert">Dessert</option>
        <option value="Drinks">Drink</option>
        <option value="Sides">Side</option>
      </select>
    </div>
    <div v-if="filteredItems" class="container d-flex flex-row gap-5">
      <ItemCard v-for="item in filteredItems" :key="item.id" :item="item" />
    </div>
    <div v-if="Products"></div>
    <div class="row">
      <div
        v-for="product in Products"
        :key="product.product_id"
        class="product col-md-4 p-5"
      >
        <div class="card">
          <img class="car-image" v-bind:src="product.imgURL" alt="" />
          <!-- <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <p>{{ product.quantity }}</p>
          <p>${{ product.price }}</p> -->
          <router-link
            id="product-link"
            :to="{ name: 'productDetails', params: { id: product.id } }"
            >More info <i class="bi bi-arrow-right"></i
          ></router-link>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

// import ProductCards from "../components/ProductCards.vue";

export default {
  components: {
    Footer,
    Navbar,
  },
  mounted() {
    this.$store.dispatch("getproducts");
  },
  computed: {
    Products() {
      return this.$store.state.products;
    },
  },
};
</script>
<style scoped>
#products {
  background-color: rgb(156, 156, 156);
}
.card {
  justify-content: center;
  align-content: center;
  gap: 30px;
  width: 500px;
  height: auto;
  border-radius: 0 !important;
  box-shadow: 3px 3px 3px rgba(32, 32, 32, 0.37);
}
/* .card:hover {
  justify-content: center;
  align-content: center;
  gap: 30px;
  width: 500px;
  height: auto;
  border-radius: 0 !important;
  box-shadow: 3px 3px 3px rgba(32, 32, 32, 0.37);
} */
.car-image {
  width: 500px;
  height: 500px;
  aspect-ratio: 1;
  object-fit: contain;
}
</style>
