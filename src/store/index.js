import router from "@/router";

import { createStore } from "vuex";
export default createStore({
  // State is where the data is
  state: {
    //Best to for the data name to be a single version of the array (properties = property)
    products: null,
    user: null,
    cart: [],
    product: null,
    products: null,
    user: null,
    asc: true,
  },
  // Mutations are used to update state
  mutations: {
    setproducts: (state, products) => {
      state.products = products;
    },
    setSingleproduct: (state, product) => {
      state.product = product;
    },
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    setUser: (state, user) => {
      state.user = user;
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
    sortByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price; //like vanilla javascript, this is how you make a sort function
      });
      if (!state.asc) {
        //if the asc is not true, it reverses the current order of the list
        state.products.reverse(); // reverts the order
      }
      state.asc = !state.asc; //states that when the function is run, asc becomes false instead of true
    },
  },
  // Actions are for ASYNC / Fetch calls
  actions: {
    login: async (context, payload) => {
      const { email, userpassword } = payload;

      fetch("https://jdm-precision.herokuapp.com/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          userpassword: userpassword,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json.token));
    },
    register: async (context, payload) => {
      const { fullname, email, userpassword, joinDate, phonenumber } = payload;

      fetch("https://jdm-precision.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          userpassword: userpassword,
          joinDate: joinDate,
          phonenumber: phonenumber,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },
    getproducts: async (context) => {
      //async (context) must ALWAYS be in
     fetch("https://jdm-precision.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => 
          context.commit("setproducts", products),
        ); //sends the changes to the array
        // console.log(products);
    },
    getUser: async (context) => {
      fetch("https://jdm-precision.herokuapp.com/users")
        .then((res) => res.json())
        .then((user) => context.commit("setUser", user));
    },
    getSingleproduct: async (context, id) => {
      fetch("https://jdm-precision.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setSingleproduct", product));
    },
    createproduct: async (context, product) => {
      // console.log(product);
      fetch("https://jdm-precision.herokuapp.com/products/", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((products) => {
          console.log(products)
          // context.dispatch("getproducts", product);
        });
      },
      createuser: async (context, user) => {
        // console.log(product);
        fetch("https://jdm-precision.herokuapp.com/users/", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((users) => {
            console.log(users)
            // context.dispatch("getusers", user);
          });
        },
    editproduct: async (context, product) => {
      fetch("https://jdm-precision.herokuapp.com/products/" + id, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          context.dispatch("getproducts", product);
        });
    },
    deleteproduct: async (context, id) => {
      fetch("https://jdm-precision.herokuapp.com/products/" + id, {
        method: "DELETE",
      }).then(() => {
        context.dispatch("getproducts");
      });
    },
    addToCart: async (context, id) => {
      this.state.cart.product.push(id);
      context.dispatch("updateCart", this.state.cart);
    },
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter((product) => product.id != id);
      context.commit("removeFromCart", newCart);
    },
  },
});
// const form = document.getElementById("formData");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   // V-Model
//   let fullname = document.getElementById("fullname").value;
//   let email = document.getElementById("email").value;
//   let userpassword = document.getElementById("userpassword").value;
//   let userRole = document.getElementById("userRole").value;
//   let phonenumber = document.getElementById("phonenumber").value;
//   let joinDate = document.getElementById("joinDate").value;
//   let cart = document.getElementById("cart").value;
//   fetch("http://localhost:6969/users/register", {
//     method: "POST",
//     body: JSON.stringify({
//       fullname: fullname,
//       email: email,
//       userpassword: userpassword,
//       userRole: userRole,
//       phonenumber: phonenumber,
//       joinDate: joinDate,
//     }),
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// });
