<template>
  <input type="text" v-model="search" placeholder="Search" />
  <select v-model="category">
    <option value="All" selected>All</option>
    <option value="JDM">JDM</option>
  </select>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
        <th scope="col">Category</th>
        <th scope="col">Img URL</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="car in cars" :key="car.id">
        <td scope="row">{{ car.id }}</td>
        <td><img :src="car.image" class="image" /></td>
        <td>{{ car.name }}</td>
        <td>{{ car.description }}</td>
        <td>{{ car.price }}</td>
        <td>{{ car.category }}</td>
        <td>{{ car.image }}</td>
        <td><EditModal /></td>
        <td>
          <i class="fa-solid fa-trash-can" @click="deletecar(car.id)"></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import store from "@/store";
import EditModal from "../components/EditModal.vue";
export default {
  components: { EditModal },
  data() {
    return {
      email: "", //This makes the default input an empty string
      psw: "", //This makes the default input an empty string
      search: "",
      category: "All",
    };
  },

  computed: {
    user() {
      return this.$store.state.user; //Pulls the array from the store
    },
    cars() {
      return this.$store.state.cars?.filter((car) => {
        let isMatch = true;
        if (!car.name?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.category !== "All" && car.category !== this.category)
          isMatch = false;
        return isMatch;
      });
    },
  },

  mounted() {
    if (!this.user) this.$router.push("/login");
    this.$store.dispatch("getcars");
  },

  methods: {
    login() {
      store.dispatch(
        "login" /*login is the context(array)*/,
        {
          email: this.email, //retrieves the input from the user
          psw: this.psw, //retrieves the input from the user
        } /*This object becomes the payload. The payload will be compared to the original array to see if the inputs match*/
      );
    },

    deletecar(id) {
      this.$store.dispatch("deletecar", id);
    },
  },
};
</script>
<style scoped>
/* Admin */

.image {
  width: 100px;
  aspect-ratio: 1;
}
</style>
