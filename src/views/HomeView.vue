<template>
  <Navbar />
  <section id="Landing">
    <heading class="heading">JDM Precision</heading>
    <hr class="text-muted" />
    <h1>stu tu tu tu</h1>
    <div class="container">
      <button type="button" id="button" class="btn btn-outline-dark">
        <a href="/auction">Auction</a>
      </button>

      <button type="button" id="button" class="btn btn-outline-dark">
        <a href="/contact">Contact</a>
      </button>
    </div>
  </section>
  <section id="About">
    <div class="row">
      <div class="col-md-6 p-5">
        <div class="carousel">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://i.postimg.cc/ZRShjW0v/dillon-kydd-go-VNEgrl-Fs8-unsplash-1.jpg"
                  class="carousel-img d-block w-100"
                  alt="Nissan Skyline GTR-35"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://i.postimg.cc/prZgXkWP/simone-durelli-qr2bakjpm-Rc-unsplash.jpg"
                  class="carousel-img d-block w-100"
                  alt="Honda S2000"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://i.postimg.cc/gktTSxrt/anthony-bautista-Jwmu-Q3-CX6-Zo-unsplash.jpg"
                  class="carousel-img d-block w-100"
                  alt="Mazda RX7"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <!-- <img id="img-hover" src="https://i.postimg.cc/ZRShjW0v/dillon-kydd-go-VNEgrl-Fs8-unsplash-1.jpg" style=" width: 700px; height: 900px;"/> -->
      </div>
      <div class="col-sm-6 p-5">
        <!-- <h1 class="h1-style p-5 text-muted">Who is JDM Precision ?</h1> -->
        <div class="text-effect">
          <span>J</span><span>D</span><span>M</span> <span>p</span><span>r</span
          ><span>e</span><span>c</span><span>i</span><span>s</span><span>i</span
          ><span>o</span><span>n</span>
        </div>
        <hr class="text-muted" />
        <h2>-About Us-</h2>
        <hr class="text-muted" />
        <p class="paragraph text-muted p-3">
          Welcome to JDM Precision, your number one source for all things JDM
          car-related. We're dedicated to giving you the very best of powerful
          JDM machines, with a focus on customer service, brand auctioning and
          transparency from our team.
        </p>
        <p class="paragraph text-muted p-3">
          Founded in 2022 by Fatima Galant and Tristan Daniels, JDM Precision
          has come a long way from its beginnings in a cramped room. When we
          first started out, our passion for car products drove us to quit our
          day jobs, do tons of research, and 100% dedicate ourselves to this
          business so that JDM Precision can offer you the world's best stu tu
          tu tu. We now serve customers all over The world, and are thrilled
          that we're able to turn our passion into our own website.
        </p>
        <p class="paragraph text-muted">
          We hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us.
        </p>
        <p class="paragraph text-muted">Sincerely, JDM Precision</p>
      </div>
    </div>
    <Footer />
  </section>
</template>
<script>
// @ is an alias to /src
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
#Landing {
  background-image: url("https://i.postimg.cc/cJmqN7V5/Landing.jpg");
  overflow-x: hidden;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  text-align: center;
  padding-top: 15rem;
}
.heading {
  font-size: 10rem;
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  text-shadow: 5px 5px 5px grey;
}
@media screen and (max-width: 686px) {
  .heading {
    font-size: 7rem;
    font-weight: 900;
    font-family: "Raleway", sans-serif;
  }
}
@media screen and (max-width: 500px) {
  .heading {
    font-size: 4rem;
    font-weight: 900;
    font-family: "Raleway", sans-serif;
  }
}
.button {
  color: white;
  border-radius: 0 !important;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration-line: none;
}
#About {
  background-color: #0a0908;
  overflow-x: hidden;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  gap: 30px;
  text-align: center;
}
#img-hover:hover {
  filter: drop-shadow(10px 10px 3px rgba(0, 0, 0, 0.3));
  transition: 3s ease-in-out;
}
.carousel {
  /* padding-top: 1rem; */
}
.carousel-img {
  padding-top: 10px;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
.h1-style {
  font-size: 4rem;
  font-family: "Work Sans", sans-serif;
  color: white;
}
@media screen and (max-width: 883px) {
  .h1-style {
    font-size: 3rem;
    font-family: "Work Sans", sans-serif;
  }
}
.paragraph {
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
}
p {
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
}
.text-effect {
  font-family: "Do Hyeon", sans-serif;
  font-size: 100px;
  text-transform: uppercase;
  text-align: center;
}
.text-effect span {
  color: transparent;
  background: linear-gradient(#4568dc, #b06ab3);
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  animation: flip 3s infinite;
  animation-delay: calc(0.2s * var(--i));
}
.text-effect span:nth-child(1) {
  --i: 1;
}
.text-effect span:nth-child(2) {
  --i: 2;
}
.text-effect span:nth-child(3) {
  --i: 3;
}
.text-effect span:nth-child(4) {
  --i: 4;
}
.text-effect span:nth-child(5) {
  --i: 5;
}
.text-effect span:nth-child(6) {
  --i: 6;
}
.text-effect span:nth-child(7) {
  --i: 7;
}
.text-effect span:nth-child(8) {
  --i: 8;
}
.text-effect span:nth-child(9) {
  --i: 9;
}
.text-effect span:nth-child(10) {
  --i: 10;
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}
@media only screen and (max-width: 990px) {
  .text-effect {
    font-size: 90px;
  }
}
@media only screen and (max-width: 767px) {
  .text-effect {
    font-size: 70px;
  }
}
@media only screen and (max-width: 576px) {
  .text-effect {
    font-size: 55px;
  }
}
@media only screen and (max-width: 479px) {
  .text-effect {
    font-size: 40px;
  }
}
</style>
