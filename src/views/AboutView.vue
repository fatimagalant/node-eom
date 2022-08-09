<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Footer />
  <Navbar />
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
