<template>
  <div class="about">

      <section class="about_main" id="goAbout">

        <article class="about__main-desc">
            <h3>Sobre nosotros</h3>
            <figure id="main-hide-figure">
              <img src="../assets/images/img-1.jpg" alt="Abogados">
            </figure>

            <p>Quiroz Govea & Asociados, es la visión de unos de su miembros fundador:
              El Doctor <b> Javier Alexis Quiroz Murillo </b> quien en 1984 obtuvo en la Universidad
              de Panamá, su licenciatura en Derecho y Ciencias Políticas y conformando una de
              las firmas familiares la cual cuenta con 37 años de experiencia en diversas áreas
              del derecho, brindando sus servicios y conocimientos a una cartera de clientes
              distinguidos, ofreciendo un trato personalizado con el fin de lograr excelente
              resultados en sus diligencia legales.
            </p>

            <a v-animate-css.hover="'pulse'" class="btn"
              href="https://www.youtube.com/channel/UCqXWsJziEdCpwUz1yWBZhKQ">
              <i class="fab fa-youtube"></i> YouTube
            </a>
        </article>

        <section id="main-figure" class="about__main-desc" data-aos="fade-left">
          <figure>
            <img src="../assets/images/img-1.jpg" alt="Abogados">
          </figure>
        </section>

      </section>

      <div class="about__map-one">
            <div class="map__one-data">
                  <h3 class="map__one-data--title">Visita nuestras sucursales</h3>
                  <figure id="map--img">
                    <img src="../assets/images/img-3.jpg" alt="">
                  </figure>
                  <div class="map--text">
                      <h5><i class="fas fa-map-marker-alt"></i>
                      Bethania</h5>
                      <p>Ciudad de Panamá, Bethania, # 44, Calle Nombre de Dios,
                      50 mts del Cuartel de Bomberos del Ingenio.</p>
                  </div>
            </div>
              <div class="map__one-embed" data-aos="fade-up">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57817.43487718838!2d-79.53928356594494!3d9.004554737700452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca84936bba12f%3A0xf0028f54ea9c618c!2s74%20Oeste%2044%2C%20Panam%C3%A1%2C%20Panama!5e0!3m2!1sen!2sus!4v1636259834010!5m2!1sen!2sus" width="600" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </div>
      </div>

      <div id="sucursal-2" class="about__map-one">
            <div id="suc-2" class="map__one-data">
                  <iframe id="map--img" width="560" height="315" src="https://www.youtube.com/embed/TggqBIpW6Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <div class="map--text">
                      <h5><i class="fas fa-map-marker-alt"></i>
                      San Carlos</h5>
                      <p>Visítanos en Panamá Oeste, San José,
                        Distrito de San Carlos, Camino a la Playa,
                        Calle Picaflor, Casa n°116.</p>
                  </div>
            </div>
            <div class="map__one-embed" data-aos="fade-up">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33443.22192439194!2d-79.9249888363204!3d8.521230620701996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8face557151bf97d%3A0x62d55871e28a5e85!2sManzana%20130909%2029-291%2C%20San%20Jos%C3%A9%2C%20Panama!5e0!3m2!1sen!2sus!4v1636258115199!5m2!1sen!2sus" width="600" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
      </div>

  </div>
</template>

<script>
import AOS from 'aos';

export default {
  name: 'About',
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.about_main {
  width: 95%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: lightgreen; */
  margin-top: 50px;
}

.about__main-desc {
  width: 50%;
  height: 100vh;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: lightpink; */
  /* border: 2px solid black; */
  text-align: justify;
}

h3 {
  font-size: 30px;
  color: var(--brownDg-2);
  align-self: flex-start;
}

.about__main-desc p {
    line-height: 25px;
    font-size: 20px;
    letter-spacing: 1.4px;
    font-family: 'Mukta', sans-serif;
}

.btn {
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  gap: 10px;
  background-color: var(--redLg);
  text-decoration: none;
  font-weight: bold;
  border-radius: 50px;
  color: var(--white);
  letter-spacing: 2px;
  font-family: 'Mukta';
}

.btn:hover { background-color: var(--red); }

figure {
  width: 100%;
  margin: 0;
}

.about__main-desc img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
  border-radius: 1000px;
}

#main-hide-figure img {
  display: none;
  width: 100%;
  height: 15vh;
  object-fit: cover;
  border-radius: 10px;
}

/* --- --- -- Map section -- --- --- */
.about__map-one {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--chocolateLg-3);
}

.map__one-data, .map__one-embed {
  width: 50%;
  height: 100vh;
  /* background-color: lightcoral; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.map__one-data h3 {
  align-self: center;
}

.map__one-data img {
  width: 80%;
  height: 55vh;
  object-fit: cover;
  border-radius: 10px;
}

.map--text {
  width: 70%;
  text-align: left;
  align-self: flex-start;
  margin-left: 75px;
  color: var(--brownDg-2);
}

.map--text h5 {
  font-size: 23px;
  margin: 0;
}

#sucursal-2 {
  flex-direction: row-reverse;
  background-color: var(--white);
}

#suc-2 {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
}

@media only screen and (max-width: 1250px) {
  #one-map {
    width: 100%;
  }
  .about__main-desc img {
    border-radius: 30px;
  }

  .map__one-embed iframe {
    width: 100%;
  }

  #suc-2 iframe {
    width: 80%;
  }
}

@media only screen and (max-width: 1000px) {
  .about_main  {
    flex-direction: column;
    margin-top: 0;
  }
  .about__main-desc {
    width: 70%;
    padding: 0;
  }

  #main-figure {
    display: none;
  }

  #main-hide-figure img {
    display: flex;
  }

  .map__one-data, .map__one-embed {
    width: 70%;
    height: 60vh;
    margin-bottom: 50px;
  }

  .about__map-one {
    flex-direction: column;
  }

  #map--img {
    display: none;
  }

  .map--text {
    width: 100%;
    margin-left: 7px;
    margin-bottom: -45px;
  }

  #sucursal-2 {
    flex-direction: column;
    height: 80vh;
    margin-top: 80px;
  }
}

@media only screen and (max-width: 700px) {
  .about__main-desc {
    align-items: center;
    width: 100%;
    gap: 20px;
  }

  h3{
    align-self: center;
    font-size: 32px;
  }

  .btn { align-self: center; width: 100%; }

  .map__one-data {
    width: 95%;
  }

  .map__one-embed {
    width: 100%;
  }

  .map__one-embed iframe {
    margin-bottom: -50px;
  }
}

@media only screen and (max-width: 500px) {
  .about_main  {
    height: 125vh;
  }
}

@media only screen and (max-width: 400px) {
  .about_main  {
    height: 130vh;
  }

  .about__main-desc {
    gap: 0px;
  }
}
</style>
