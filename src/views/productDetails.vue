<template>
  <section id="productDetails">
    <Navbar />
    <!-- <div id="item-wrapper"> -->
    <div id="info-div">
      <div id="item-container" v-if="product">
        <div
          v-for="product in product"
          :key="product.product_id"
          class="product col-sm-6 p-5"
        >
          <div class="row">
            <div class="col-md-6">
              <img class="car-image" v-bind:src="product.imgURL" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h1 class="text-black product-name">Car: {{ product.title }}</h1>
              <p id="image-description" class="text-muted">
                {{ product.description }}
              </p>
              <h4 class="my-1 text-black">Category:{{ product.category }}</h4>
              <h5 class="my-1 text-black">Price: R {{ product.price }}</h5>
              <p class="my-1 text-muted">qty: {{ product.quantity }}</p>
              <button class="btn" @click="addToCart">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>

              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <Footer />
  </section>
</template>
<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Footer,
    Navbar,
  },
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch(
      "https://jdm-precision.herokuapp.com/products/" + this.$route.params.id
    )
      .then((res) => res.json())
      .then((data) => (this.product = data));
  },
  methods: {
    addToCart(item) {
      this.$store.commit("updateCart", item);
    },
  },
  // props: ["id"],
  // computed: {
  //   product() {
  //     return this.$store.state.product;
  //   },
  // },

  // mounted() {
  //   this.$store.dispatch("getSingleproduct", this.id);
};
</script>
<style scoped>
#productDetails {
  background-color: #0a0908;
  color: white;
}
img.car-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
/* .product.col-md-4.p-5 {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
} */
</style>
