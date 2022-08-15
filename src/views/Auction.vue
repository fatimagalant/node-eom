<template>
  <Navbar />
  <div class="auction">
    <h1>This is an auction page</h1>
  </div>
  <Footer />
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
<style scoped></style>
