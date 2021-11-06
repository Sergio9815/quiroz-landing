<template>
  <div class="about">
    <section class="about__container">
      <div id="data__one" class="container__data">
        <h3>Sobre nosotros</h3>
        <figure>
          <img src="../assets/images/img-1.jpg" alt="Abogados">
        </figure>
        <p>Quiroz Govea & Asociados, es la visión de unos de su miembros fundador:
          El Doctor <b> Javier Alexis Quiroz Murillo </b> quien en 1984 obtuvo en la Universidad
          de Panamá, su licenciatura en Derecho y Ciencias Políticas y conformando una de
          las firmas familiares la cual cuenta con 37 años de experiencia en diversas áreas
          del derecho, brindando sus servicios y conocimientos a una cartera de clientes
          distinguidos, ofreciendo un trato personalizado con el fin de lograr excelente
          resultados en sus diligencia legales. </p>
        <a v-animate-css.hover="'pulse'" class="btn"
          href="https://www.youtube.com/channel/UCqXWsJziEdCpwUz1yWBZhKQ"
        ><i class="fab fa-youtube"></i> YouTube</a>
      </div>
    </section>

    <section id="data__two" class="about__container">
      <figure>
        <img src="../assets/images/img-1.jpg" alt="Abogados">
      </figure>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about {
  width: 90%;
  height: 82vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: lightgreen; */
  gap: 20px;
  margin-top: 70px;
}

.about__container {
  width: 50%;
  height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: lightpink; */
}

.container__data {
  width: 80%;
  text-align: justify;
  line-height: 25px;
  letter-spacing: 1px;
}

.container__data h3{
  font-size: 30px;
  color: var(--brownDg-2);
}

.btn {
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--redLg);
  text-decoration: none;
  border-radius: 50px;
  color: var(--brownDg);
  letter-spacing: 2px;
  font-family: 'Mukta';
}

.btn:hover { background-color: var(--red); }

figure {
  width: 100%;
  margin: 0;
}

#data__two img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
  border-radius: 1000px;
}

#data__one img {
  display: none;
  width: 100%;
  height: 40vh;
  object-fit: cover;
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1000px) {
  .about {
    flex-direction: column;
    margin-top: 150px;
  }

  .about__container {
    width: 100%;
  }

  #data__two {
    display: none;
  }

  #data__one img {
    display: flex;
  }
}

</style>
