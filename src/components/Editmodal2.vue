<template>
  <div v-if="active" class="mod">
    <form @submit.prevent="editusers(user.id)">
      <div>CAR NAME</div>
      <input type="text" v-model="user.fullname" />
      <div>CAR email</div>
      <input type="text" v-model="user.email" />
      <div>userpassword</div>
      <input type="password" v-model="user.userpassword" />
      <div>phonenumber</div>
      <input type="number" v-model="user.phonenumber" />
      <div>joinDate</div>
      <input type="date" v-model="user.joinDate" />
      <div>cart</div>
      <input type="text" v-model="user.cart" />
      <br />
      <button type="submit">Save</button>
      <button type="button" @click="toggleModal">Close</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
    editusers() {
      this.$store.dispatch("editusers", this.user);
    },
  },
};
</script>
<style scoped>
.mod {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border: 5px solid black;
  z-index: 100;
}
#edit {
  font-size: 20px;
  font-weight: 900;
  color: cornflowerblue;
}
</style>