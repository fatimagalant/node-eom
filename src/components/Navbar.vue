<template>
  <nav class="nav-links">
    <router-link class="items" @click="toggleNav()" to="/">
      <i class="fa-solid fa-code"></i
    ></router-link>

    <router-link class="items" @click="toggleNav()" to="/">Home</router-link>
    <router-link class="items" @click="toggleNav()" to="/about"
      >About</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/resume"
      >Resume</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/projects"
      >Projects</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/testimonials"
      >Testimonials</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/contact"
      >Contact</router-link
    >
    <hr style="width: 100%; text-align: left; margin-left: 0" />
    <div class="socials">
      <div class="row">
        <div class="col">
          <a
            href="https://www.linkedin.com/in/fatima-g-778944228/"
            target="_blank"
            class="btn btn-light"
            style="border-radius: 50%"
            ><i class="fa-brands fa-linkedin"></i
          ></a>
        </div>
        <div class="col">
          <a
            href="https://www.github.com/fatimagalant"
            target="_blank"
            class="btn btn-light"
            style="border-radius: 50%"
            ><i class="fa-brands fa-github"></i
          ></a>
        </div>
        <div class="col">
          <a
            href="https://www.codepen.io/fatimagalant"
            target="_blank"
            class="btn btn-light"
            style="border-radius: 50%"
            ><i class="fa-brands fa-codepen"></i
          ></a>
        </div>
        <div class="col">
          <a
            href="https://www.instagram.com/fatimagalant_"
            target="_blank"
            class="btn btn-light"
            style="border-radius: 50%"
            ><i class="fa-brands fa-instagram"></i
          ></a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
</script>
<style scoped>
nav {
  align-items: center;
}
/* #close-btn {
  margin-left: 19rem;
  margin-top: 3rem;
  font-size: 2rem;
  position: absolute;
  border: none;
  background: transparent;
  color: whitesmoke;
  transform-origin: 0 0;
  transform: rotate(90deg);
} */
/* #menu-btn {
  color: grey;
  z-index: 90;
  font-size: 2rem;
  position: fixed;
  top: 20px; */
  /* right: 10px; */
  /* padding-left: 30px;
  border: none;
  background: transparent;
  transform-origin: 0 0; */
  /* transform: rotate(90deg); */
/* } */
fa-brands {
  width: 10rem;
  height: auto;
  transition: all ease-in-out 0.5s;
}
a:hover {
  background-color: black;
  color: white;
  border: none;
}
.items {
  padding: 0.5rem;
  font-size: 3rem;
  list-style-type: none;
  --bs-text-opacity: 1;
  color: grey;
  transition: all ease-in-out 0.5s;
  text-decoration: none;
}
.items:hover {
  color: whitesmoke;
}
.socials {
  padding-left: 35px;
}
.nav-links {
  z-index: 100;
  font-family: fancy;
  position: fixed;
  top: -150%;
  left: 0;
  /* right: 0; */
  height: 105vh;
  background-color: black;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  transition: top 0.3s linear;
  font-family: "Montserrat", sans-serif;
}
@media screen and (max-width: 928px) {
  .nav-links {
    z-index: 100;
    font-family: fancy;
    position: fixed;
    top: -150%;
    left: 0;
    right: 0;
    height: 105vh;
    background-color: black;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    transition: top 0.3s linear;
    font-family: "Noto Serif Display", monospace;
  }
  /* #close-btn {
    margin-left: 54rem;
    margin-top: 3rem;
    font-size: 2rem;
    position: absolute;
    border: none;
    background: transparent;
    color: whitesmoke;
    transform-origin: 0 0;
    transform: rotate(90deg);
  } */
}
@media screen and (max-width: 800px) {
  .nav-links {
    z-index: 100;
    font-family: fancy;
    position: fixed;
    top: -150%;
    left: 0;
    right: 0;
    height: 105vh;
    background-color: black;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    transition: top 0.3s linear;
    font-family: "Noto Serif Display", monospace;
  }
  /* #close-btn {
    margin-left: 54rem;
    margin-top: 3rem;
    font-size: 2rem;
    position: absolute;
    border: none;
    background: transparent;
    color: whitesmoke;
    transform-origin: 0 0;
    transform: rotate(90deg);
  } */
  .align {
    display: flex;
    flex-direction: row;
  }
  a:hover {
    filter: invert;
  }
}
.nav-links.active {
  top: 0;
}
@media only screen and (max-width: 600px) {
  /* #close-btn {
    margin-left: 27rem;
    margin-top: 2rem;
    /* font-size: 1rem; */
  /* }
  #menu-btn {
    position: fixed;
    color: white; */
    /* right: -2rem;
    font-size: 1rem; */
  /* }  */
  .items {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
    align-items: center;
  }
}
@media screen and (max-width: 500px) {
  .socials[data-v-41458b80] {
    padding-left: 65px;
  }
}
</style>
