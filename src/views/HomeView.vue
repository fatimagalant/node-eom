<template>
  <section id="Landing">
   
   <div class="row">
  <div class="col-md-6 p-5">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/ZRShjW0v/dillon-kydd-go-VNEgrl-Fs8-unsplash-1.jpg" class="carousel-img d-block w-100" alt="Nissan Skyline GTR-35">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/prZgXkWP/simone-durelli-qr2bakjpm-Rc-unsplash.jpg" class="carousel-img d-block w-100" alt="Honda S2000">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/gktTSxrt/anthony-bautista-Jwmu-Q3-CX6-Zo-unsplash.jpg" class="carousel-img d-block w-100" alt="Mazda RX7">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <!-- <img id="img-hover" src="https://i.postimg.cc/ZRShjW0v/dillon-kydd-go-VNEgrl-Fs8-unsplash-1.jpg" style=" width: 700px; height: 900px;"/> -->
  </div>
  <div class="col-sm-6 p-5">
    <h1 class="h1-style p-5 text-muted">JDM Precision</h1> 
    <p class=" paragraph text-muted p-3">Welcome to JDM Precision, your number one source for all things JDM car-related. We're dedicated to giving you the very best of powerful JDM machines, with a focus on customer service, brand auctioning and transparency from our team.</p>
    <p class="paragraph text-muted p-3">Founded in 2022 by Fatima Galant and Tristan Daniels, JDM Precision has come a long way from its beginnings in ur moms cooch. When we first started out, our passion for car products drove us to  quit our day jobs, do tons of research, and 100% dedicate ourselves to this business so that JDM Precision can offer you the world's best stu tu tu tu. We now serve customers all over The world, and are thrilled that we're able to turn our passion into our own website.
</p>
<p class="paragraph text-muted">We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
<p class="paragraph text-muted">Sincerely,

JDM Precision</p>
    </div>
    </div>
    <Navbar />
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@1,300&family=Poppins:wght@300&family=Raleway:wght@300&family=Work+Sans:wght@300&display=swap');
#Landing {
  background-color: #D6D5C9;
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
#img-hover:hover{
  filter:drop-shadow(10px 10px 3px rgba(0,0,0,0.3));
  transition: 3s ease-in-out;
}
.carousel-img{
   width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
.h1-style{
  font-size: 5rem;
  font-family:'Work Sans', sans-serif;
}
@media screen and (max-width: 883px) {
.h1-style{
  font-size: 3rem;
  font-family:'Work Sans', sans-serif;
}
}
.paragraph{
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
}
p{
  font-size: 1.2rem;
   font-family: 'Poppins', sans-serif;
}
</style>
