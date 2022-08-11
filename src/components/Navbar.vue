<template>
  <!-- <nav>
    <nav class="nav-links">
      <router-link to="/">Home </router-link>
      <br />
      <router-link to="/auction">Auction </router-link>
      <router-link to="/products">Products </router-link>
      <router-link to="/product:id">Single Product </router-link>
      <router-link to="/contact">Contact </router-link>
      <router-link to="/login">Login </router-link>
      <router-link to="/register">Register </router-link>
    </nav>
  </nav> -->
  <nav class="navbar sticky-top text-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">JDM Precision</a>
      <nav class="nav-links">
        <router-link to="/">Home </router-link>
        <router-link to="/products">Products </router-link>
        <router-link to="/product:id">Single Product </router-link>
        <router-link to="/contact">Contact </router-link>
        <router-link to="/login">Login </router-link>
        <router-link to="/register">Register </router-link>
      </nav>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
nav {
  color: white;
  background-color: black;
  padding: 20px !important;
}

.nav-links:active {
  color: blueviolet;
}
.nav-links:hover {
  color: blueviolet;
}
</style>
