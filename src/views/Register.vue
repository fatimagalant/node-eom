<template>
  <section id="register">
  <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 register-box">
          <div class="col-lg-12 register-key">
            <i class="fa-solid fa-user-large"></i>
          </div>
          <div class="col-lg-12 register-title">Register</div>

          <div class="col-lg-12 register-form">
            <div class="col-lg-12 register-form">
              <form>
                <div class="form-group">
                  <label class="form-control-label">FULL NAME</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="form-control-label">EMAIL</label>
                  <input type="email" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="form-control-label">PASSWORD</label>
                  <input type="password" class="form-control" i />
                </div>

                <div class="col-lg-12 registerbttm">
                  <div class="col-lg-6 register-btm register-text">
                    <!-- Error Message -->
                  </div>
                  <div class="col-lg-6 register-btm register-button">
                    <button type="submit" class="btn btn-outline-primary">
                      Register
                    </button>
                    <p id="register-here">
                      Already have an account ? Login <a href="/login">here</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Footer,
    Navbar,
  },
    computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      fullName: "",
      role: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        fullName: this.fullName,
        role: this.role,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
#register {
  background-color: black;
  min-height: 100vh;
}
.register-box {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  display: flex;
  margin-top: 10rem;
  height: auto;
  background: #020202;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.register-key {
  height: 100px;
  font-size: 80px;
  line-height: 100px;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.register-title {
  margin-top: 15px;
  text-align: center;
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 15px;
  font-weight: bold;
  color: #ecf0f5;
}

.register-form {
  margin-top: 25px;
  text-align: left;
}

input[type="text"] {
  background-color: #000000;
  border: none;
  border-bottom: 2px solid rgb(111, 17, 218);
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  color: #ecf0f5;
}
input[type="email"] {
  background-color: #000000;
  border: none;
  border-bottom: 2px solid rgb(111, 17, 218);
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  color: #ecf0f5;
}

input[type="password"] {
  background-color: #1a2226;
  border: none;
  border-bottom: 2px solid rgb(111, 17, 218);
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  padding-left: 0px;
  margin-bottom: 20px;
  color: #ecf0f5;
}

.form-group {
  margin-bottom: 40px;
  outline: 0px;
}

.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid rgb(111, 17, 218);
  outline: 0;
  background-color: #1a2226;
  color: #ecf0f5;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0;
}

label {
  margin-bottom: 0px;
}

.form-control-label {
  font-size: 10px;
  color: #6c6c6c;
  font-weight: bold;
  letter-spacing: 1px;
}

.btn-outline-primary {
  border-color: #6a0fe0;
  color: #ffff;
  border-radius: 0px;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.btn-outline-primary:hover {
  background-color: #6a0fe0;
  right: 0px;
}

.register-btm {
  float: left;
}

.register-button {
  padding-right: 0px;
  text-align: right;
  margin-bottom: 25px;
}

.register-text {
  text-align: left;
  padding-left: 0px;
  color: #a2a4a4;
}

.registerbttm {
  padding: 0px;
}
</style>
