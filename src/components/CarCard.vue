<template>
  <router-link
    :to="{ name: 'SingleCardView', params: { id: car.id } }"
    class="link"
  >
    <div class="card shadow mb-3">
      <img :src="car.image" class="car-img mb-2" alt="Picture of car" />
      <h5 class="text-black">{{ car.name }}</h5>
      <p class="text-secondary">
        {{ car.category }}
      </p>
      <p>R{{ car.price }}</p>
      <h5 class="text-black mb-3">{{ car.category }}</h5>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["car"],
};
</script>
<style scoped>
.card {
  color: black;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  transition: all 0.6s ease;
}
.card:hover {
  transform: scale(1.02);
}

.link {
  text-decoration: none;
}

.card p {
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#cars {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
}
.car-img {
  height: 275px;
  width: 350px;
}
@media screen and (max-width: 800px) {
  .card {
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>
