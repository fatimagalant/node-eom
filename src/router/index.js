import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/auction",
    name: "Auction",

    component: () => import("../views/Auction.vue"),
  },
  {
    path: "/products",
    name: "Products",

    component: () => import("../views/Products.vue"),
  },
  {
    path: "/products/:id",
    name: "productDetails",
    component: () => import("../views/productDetails.vue"),
    props: true,
  },

  {
    path: "/contact",
    name: "Contact",

    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/login",
    name: "Login",

    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",

    component: () => import("../views/Register.vue"),
  },
  {
    path: "/cart",
    name: "Cart",

    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/account",
    name: "Account",

    component: () => import("../views/Account.vue"),
  },
  {
    path: "/admin",
    name: "Admin",

    component: () => import("../views/Product Admin.vue"),
  },
  {
    path: "/useradmin",
    name: "User Admin",

    component: () => import("../views/User Admin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
