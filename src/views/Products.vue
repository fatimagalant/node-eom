<template>
  <div id="products">
    <Navbar />
    <div>
      <h1>Check out our finest car selection:</h1>
    </div>
    <!-- <div
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
    </div> -->
    <div v-if="Products"></div>
    <div class="row p-5">
      <div
        v-for="product in Products"
        :key="product.product_id"
        class="product col-sm-4 p-5"
      >
        <router-link
          id="product-link"
          :to="{ name: 'productDetails', params: { id: product.id } }"
        >
          <div class="card">
            <img class="car-image" v-bind:src="product.imgURL" alt="" />
            <!-- <div id="product-info">
            <h2>{{ product.title }}</h2>
            <h2>{{ product.price }}</h2>
          <p>{{ product.quantity }}</p>
          </div> -->
            <!-- <p>{{ product.description }}</p>-->
            <div class="button">
              <a> See more </a>
            </div>
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
  background-color: #0a0908;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  display: none;
}

#product-info {
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
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
.card:hover {
  background-color: #f3f3f3;
  justify-content: center;
  align-content: center;
  gap: 30px;
  width: 500px;
  height: auto;
  border-radius: 0 !important;
  border: none;
  box-shadow: 5px 5px 4px rgb(80, 43, 117);
  opacity: 0.4;
  transition-duration: 0.5s;
}

.button {
  position: absolute;
  width: 500px;
  left: 0;
  top: 180px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.button a {
  width: 5%;
  padding: 12px 48px;
  text-align: center;
  color: white !important;
  border: solid 2px white;
  z-index: 1;
}

.card:hover .button {
  opacity: 1;
}
.car-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
</style>
