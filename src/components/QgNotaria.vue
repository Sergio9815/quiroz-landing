<template functional>
  <div class="notaria-container">

    <section class="notaria-container-main">
      <div  class="container-main">
          <h1 id="goNotaria" class="container-main__title"> ¿Qué es Notaría Express? </h1>
          <section class="notaria-container-img-2"
          data-aos="fade-right" data-aos-duration="2000">
            <figure>
              <img src="../assets/logos/NOTARIA-EXPRESS-mejor-2-scaled.jpg"
              alt="Notaria express Logo">
            </figure>
          </section>
          <div data-aos="fade-up" data-aos-duration="2000" class="container-main__content">
            <p>
              Notaría Express, es un nuevo concepto de notaria la cual usted desde
              la comodidad de su casa u oficina puede solicitar de esta manera le
              puede decir adiós a largas filas. Usted será atendido por profesionales
              del derecho que lo guiará en sus trámites Notaría Express le brinda confianza
              seguridad de la mano de una de las firmas de abogados más prestigiosas de Panamá.
            </p>
            <a
              v-animate-css.hover="'pulse'"
              class="btn-not"
              href="https://www.youtube.com/watch?v=CWPUrPkksVQ">
              Conocer más <i class="fas fa-chevron-right"></i>
            </a>
          </div>
      </div>

      <section class="notaria-container-img" data-aos="fade-up" data-aos-duration="2000">
            <figure>
              <img src="../assets/logos/NOTARIA-EXPRESS-mejor-2-scaled.jpg"
              alt="Notaria express Logo">
            </figure>
      </section>
    </section>

    <div data-aos="fadeIn" id="blob-1" >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#A999A0" d="M39.6,-47C53.9,-35.1,70.1,-25.1,75.8,-10.7C81.6,3.8,77,22.8,67.7,39.4C58.5,55.9,44.6,70.1,28.2,75C11.8,80,-7.1,75.7,-22,67.3C-36.8,58.9,-47.6,46.3,-52,32.9C-56.3,19.4,-54.2,5.1,-51.8,-9.2C-49.4,-23.6,-46.7,-38,-38,-50.9C-29.3,-63.9,-14.7,-75.3,-1,-74.1C12.6,-72.8,25.2,-58.9,39.6,-47Z" transform="translate(100 100)" /></svg>
    </div>

  </div>
</template>

<script>
import AOS from 'aos';

export default {
  name: 'QgNotaria',
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.notaria-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brown);
}

.notaria-container-main {
  /* background-color: var(--brown); */
  width: 80%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-main {
  /* background-color: antiquewhite; */
  width: 80%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container-main__title {
  font-size: 35px;
}

.notaria-container-img-2 {
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container-main__content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  /* background-color: cornflowerblue; */
  width: 85%;
}

.container-main__content p {
  text-align:left;
  line-height: 25px;
  letter-spacing: 1.4px;
  font-family: 'Mukta', sans-serif;
  color: #2c3e50fd;
  /* background-color: aqua; */
}

.btn-not {
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  text-decoration: none;
  border-radius: 50px;
  gap: 10px;
  background-color: #BC8487;
  color: var(--white);
}

.fa-chevron-right {
  color: rgba(255, 255, 255, 0.541);
}

.notaria-container-img {
  width: 120%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #BC8487; */
}

figure {
  width: 100%;
  margin: 0;
}

.notaria-container-img img {
  width: 100%;
  object-fit: cover;
  height: 80vh;
  border-radius: 5px;
}

#blob-1 {
    position: absolute;
    width: 575px;
    float: left;
    left: 0;
    margin-top: -631px;
    margin-left: -446px;
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1000px) {

  .notaria-container {
    height: 60vh;
    margin-top: 100px;
  }

  .notaria-container-main {
    flex-direction: column;
  }

  .notaria-container-img-2 {
    display: flex;
  }

  .notaria-container-img-2 img{
    width: 100%;
    height: 35vh;
  }

  .container-main__content {
    width: 100%;
  }

  .btn-not {
    width: 100%;
  }

  .notaria-container-img {
    display: none;
  }

  #blob-1 {
    display: none;
  }
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 700px) {

  .notaria-container-main {
    /* background-color: var(--brown); */
    width: 90%;
  }

  .container-main {
    width: 100%;
  }

  .container-main__content {
    width: 90%;
  }

  .notaria-container-img-2 img{
    width: 100%;
    height: 25vh;
  }

}

</style>
