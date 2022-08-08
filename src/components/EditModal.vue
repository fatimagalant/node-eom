<template>
  <i
    title="Edit"
    class="bi bi-pencil-square"
    id="edit"
    @click="toggleModal"
  ></i>
  <div v-if="active" class="mod">
    <form @submit.prevent="editcar(car.id)">
      <div>car Name</div>
      <input type="text" v-model="car.name" />
      <div>car Price</div>
      <input type="text" v-model="car.price" />
      <div>car Description</div>
      <input type="text" v-model="car.description" />
      <div>car Category</div>
      <select v-model="car.image">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <div>car Image</div>
      <input type="text" v-model="car.image" />
      <br />
      <button type="submit">Save</button>
      <button type="button" @click="toggleModal">Close</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["car"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
    editcar() {
      this.$store.dispatch("editcar", this.car);
    },
  },
};
</script>
