<template>
  <nav class="navbar sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"
        ><img
          id="logo"
          src="https://i.postimg.cc/4xsNwKtk/jdm.png"
          style="width: 50px; height: 50px"
      /></a>
      <nav class="nav-links">
        <router-link class="items" @click="toggleNav()" to="/"
          >Home</router-link
        >
        <router-link class="items" @click="toggleNav()" to="/about"
          >About</router-link
        >

        <router-link class="items" @click="toggleNav()" to="/auction"
          >Auction</router-link
        >

        <router-link class="items" @click="toggleNav()" to="/products"
          >Products</router-link
        >

        <router-link class="items" @click="toggleNav()" to="/contact"
          >Contact</router-link
        >

        <router-link class="items" @click="toggleNav()" to="/login"
          >Login</router-link
        >

        <router-link class="items" @click="toggleNav()" to="/register"
          >Register</router-link
        >
      </nav>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar {
  padding: 3px;
  background-color: #0a0908;
}
.nav-links {
  text-decoration-line: none;
  background-color: #0a0908;
}
</style>
