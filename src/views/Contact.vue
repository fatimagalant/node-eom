<template>
  <section id="contact">
    <Navbar />
    <div class="row">
      <div class="col-sm-6 p-5">
        <img
          id="contact-img"
          class="img-fluid"
          src="https://i.postimg.cc/k57PnjLH/anthony-bautista-ngsv-Xu-Gixa-M-unsplash.jpg"
          alt="is that a supra ???"
        />
      </div>
      <div class="col-sm-6 p-5 text-dark">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >full name</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="full name"
            name="full name"
            required
          />
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label"
              name="email"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
            />
          </div>
          <div class="mb-5">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Example textarea</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
            ></textarea>
          </div>
          <iframe
            class="p-3"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1660124056192!5m2!1sen!2sza"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@1,300&family=Poppins:wght@300&family=Prata&family=Raleway:wght@300&family=Work+Sans:wght@300&display=swap");
#contact {
  background-color: #b0b5b3;
  overflow-x: hidden;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
}
#contact-img {
  width: 600px;
}
@media screen and (max-width: 1254px) {
  #contact-img {
    width: 400px;
  }
}
@media screen and (max-width: 1352px) {
  iframe {
    width: 400px;
    height: 400px;
  }
}
@media screen and (max-width: 476px) {
  iframe {
    width: 300px;
    height: 300px;
  }
}
</style>
