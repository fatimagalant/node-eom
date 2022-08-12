<template>
  <section id="item-view">
    <div id="item-wrapper">
      <div id="item-container" v-if="Products">
        <div id="info-div">
          <p class="text-white product-name">{{ product.title }}</p>
          <p id="image-description" class="text-white">
            " {{ product.description }} "
          </p>
        </div>
        <div class="d-flex flex-column align-items-start product-name">
          <img id="product-img" v-bind:src="product.imgURL" alt="" />
          <p class="my-1 text-muted">{{ product.category }}</p>
          <p class="my-1 text-white">R {{ product.price }}</p>
          <p class="my-1 text-muted">{{ product.quantity }}</p>
        </div>
      </div>
    </div>
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
};
</script>
<style></style>
