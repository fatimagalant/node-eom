<template>
  <div class="products">
    <Navbar />
    <h1>This is a products page</h1>
  </div>
  <Footer />
</template>
<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import ProductCards from "../components/ProductCards.vue";
export default {
  components: {
    Footer,
    Navbar,
    ProductCards,
  },
};
</script>
<style></style>
