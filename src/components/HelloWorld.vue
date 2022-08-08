<template>
  <section id="landing">
    <h1>Welcome to Trizima</h1>
    <h3>Home of the best JDM cars</h3>
  </section>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#landing {
  background-image: url(https://i.postimg.cc/cJmqN7V5/Landing.jpg);
  background-size: 100%;
  height: 90vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

#landing h1,
#landing h3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  font-family: sans-serif;
  text-shadow: 6px 8px 12px black;
  font-weight: bold;
}
</style>
