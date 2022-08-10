<template>
  <Navbar />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/auction">Auction</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </nav> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: grey;
}

nav {
  padding: 30px;
  background-color: rgb(194, 194, 194);
}

nav a {
  font-weight: bold;
  color: #a89ab9;
}

nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
}
</style>
