<template>
  <div id="products">
    <Navbar />
    <div
      class="d-flex flex-row justify-content-center align-items mt-3 mb-3 pt-5"
    >
      <button class="form-control btn mb-3 me-3 btn-sm" @click="sortByPrice()">
        Sort By Price
      </button>
      <input
        type="text"
        class="form-control"
        placeholder="Search..."
        v-model="search"
      />
      <button type="Submit">Search</button>
      <select v-model="category">
        <option value="All" selected>All</option>
        <option value="Nissan">Nissan</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="Mitsubishi">Mitsubishi</option>
        <option value="Mazda">Mazda</option>
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
        <router-link
          id="product-link"
          :to="{ name: 'productDetails', params: { id: product.id } }"
        >
          <div class="card">
            <img class="car-image" v-bind:src="product.imgURL" alt="" />
            <!-- <h2>{{ product.title }}</h2>
            <h2>{{ product.price }}</h2> -->
            <!-- <p>{{ product.description }}</p>
          <p>{{ product.quantity }}</p>
          <p>${{ product.price }}</p> -->
          </div>
        </router-link>
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
  data() {
    return {
      products: null,
    };
  },
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
  background-color: black;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  display: none;
}

.card {
  background-color: #f3f3f3;
  justify-content: center;
  align-content: center;
  gap: 30px;
  width: 500px;
  height: auto;
  border-radius: 0 !important;
  border: none;
  box-shadow: 5px 5px 4px rgb(80, 43, 117);
}
/* .card {
    --bs-card-spacer-y: 1rem;
    --bs-card-spacer-x: 1rem;
    --bs-card-title-spacer-y: 0.5rem;
    --bs-card-border-width: 1px;
    --bs-card-border-color: var(--bs-border-color-translucent);
    --bs-card-border-radius: 0.375rem;
    --bs-card-box-shadow: ;
    --bs-card-inner-border-radius: calc(0.375rem - 1px);
    --bs-card-cap-padding-y: 0.5rem;
    --bs-card-cap-padding-x: 1rem;
    --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
    --bs-card-cap-color: ;
    --bs-card-height: ;
    --bs-card-color: ;
    --bs-card-bg: #fff;
    --bs-card-img-overlay-padding: 1rem;
    --bs-card-group-margin: 0.75rem;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background-color: #414361;
    height: var(--bs-card-height);
    word-wrap: break-word;
    /* background-color: var(--bs-card-bg); */
/* background-clip: border-box;
    border: var(--bs-card-border-width) solid var(--bs-card-border-color);
    border-radius: var(--bs-card-border-radius);
}  */
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
  width: 100%;
  height: 25rem;
  aspect-ratio: 1;
  object-fit: cover;
}
</style>
