<template>
  <section id="admin">
    <Navbar />
    <div class="heading">
      <h1>userS ADMIN PAGE</h1>
    </div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-outline-light"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add user
    </button>

    <!-- Add Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content p-2">
          <div class="modal-header">
            <h5 class="modal-fullname" id="exampleModalLabel">Create A New User</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createuser" id="modal-form" class="p-2">
              <input
                type="text"
                id="fullname-add"
                placeholder="user Name"
                v-model="fullname"
              />
              <input
                type="text"
                id="email"
                placeholder="email"
                v-model="email"
              />
              <input
                type="password"
                placeholder="password"
                id="userpassword"
                v-model="userpassword"
              />
              <div>
                <input
                  type="text"
                  id="userRole"
                  placeholder="User Role"
                  v-model="userRole"
                />
              </div>

              <input
                v-model="phonenumber"
                class="form form-sm"
                aria-label=".form-sm example"
                id="phonenumber-add"
                type="number"
              />
              <input
                type="date"
                name="joinDate"
                id="joindate"
                placeholder="Join date of user"
                v-model="joinDate"
              />
              <input
                  type="text"
                  id="cart"
                  placeholder="cart"
                  v-model="cart"
                />
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="btn" class="btn btn-outline-dark" @click="createuser">
                Create user
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <table class="table dark text-secondary">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">FULLNAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">PASSWORD</th>
          <th scope="col">USER ROLE</th>
          <th scope="col">PHONENUMBER</th>
          <th scope="col">JOIN DATE</th>
          <th scope="col">CART</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <div v-if="users"></div>
          <div v-for="user in users" :key="user.user_id">
            <div class="row">
              <td scope="col-1">{{ user.id }}</td>
              <td scope="col-1">{{ user.fullname }}</td>
              <td scope="col-1">{{ user.email }}</td>
              <td scope="col-1">{{ user.userpassword }}</td>
              <td scope="col-1">{{ user.userRole }}</td>
              <td scope="col-1">{{ user.phonenumber }}</td>
              <td scope="col-1">{{ user.joinDate }}</td>
              <td scope="col-1">{{ user.cart }}</td>
              <td scope="col-1">
                <button type="btn">
                  <i
                    fullname="Edit"
                    class="bi bi-pencil-square"
                    id="edit"
                    @click="toggleModal"
                  ></i>
                </button>
                <button type="btn" @click="deleteuser">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </div>
          </div>
        </tr>
      </tbody>
    </table>
    <Footer />
  </section>
</template>
<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Account from "./Account.vue";
import EditModal2 from "../components/Editmodal2.vue";
export default {
  components: {
    Footer,
    Navbar,
    Account,
    EditModal2,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  data() {
    return {
      fullname: "",
      email: "",
      userpassword: "",
      phonenumber: "",
      joinDate: "",
      cart: "",
    };
  },
  methods: {
    createuser() 
    {
      return this.$store.dispatch("createuser", {
        fullname: this.fullname,
        email: this.email,
        userpassword: this.userpassword,
        phonenumber: this.phonenumber,
        joinDate: this.joinDate,
        cart: this.cart,
      });
      // console.log("users")
    },
    user() {
      return this.$store.state.user;
    },
    edituser(id) {
      return this.$store.dispatch("edituser", id);
    },

    deleteuser(id) {
      return this.$store.dispatch("deleteuser", id);
    },
  },
  mounted() {
    return this.$store.dispatch("getusers");
  },
};
</script>
<style scoped>
#admin {
  background-color: #0a0908;
  color: white;
}
.heading {
  padding-top: 4rem;
  padding-bottom: 2rem;
  border: 1px 1px 1px 1px white;
}
</style>