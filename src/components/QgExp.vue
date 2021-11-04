<template>
  <div class="exp">
    <h1 class="exp__title"> {{ title }} </h1>

    <section class="exp__container" data-aos="zoom-in-left">
      <div :class="activate ? 'zindex' : 'zindexOff'" class="exp__container-video">
        <iframe id="intro" width="560" height="315" src="https://www.youtube.com/embed/XKOO0FAkL0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

        <div class="exp__content">
            <p>Contamos con más de <b>37 años de experiencia</b>, lo cual nos permite decirle,
              consulte con Quiroz Govea & Asociados.</p>
            <a v-animate-css.hover="'tada'" class="btn" href="https://api.whatsapp.com/send?phone=+507 62764754&text=Hola, Nececito mas informacion!"
            ><i class="fab fa-whatsapp"></i> Escríbanos</a>
        </div>
    </section>

  </div>
</template>

<script>
import AOS from 'aos';

export default {
  name: 'QgExp',
  data() {
    return {
      title: 'Experiencia garantizada',
    };
  },
  props: {
    activate: Boolean,
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.exp {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  /* background-color: var(--brown); */
}

.exp__title {
  color: var(--brown);
}

.exp__container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: lightgreen; */
  width: 80%;
  gap: 40px;
  /* margin-top: -100px; */
}

.exp__content {
  width: 30%;
  height: 200px;
  /* background-color: darkorange; */
  text-align: left;
  line-height: 25px;
  font-family: 'Mukta', sans-serif;
  letter-spacing: 1.4px;
  padding: 30px;
  display: flex;
  align-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.btn {
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--green);
  text-decoration: none;
  border-radius: 50px;
  color: var(--wine);
}

.exp__container-video {
  background-color: var(--brown);
  position: relative;
  width: 618px;
  height: 315px;
  border-radius: 150px;
}

#intro {
  border-radius: 50px;
}

.zindex {
  z-index: -2;
}

.zindexOff {
  z-index: 0;
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1134px) {
  .exp__content {
    width: 70%;
    padding: 0;
  }
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1040px) {
  .exp__container {
    flex-direction: column;
  }

    .btn {
    width: 100%;
  }
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 700px) {
  .exp__container-video {
    background-color: transparent;
    width: 100%;
  }

  #intro {
    border-radius: 0;
    width: 100%;
  }

  .exp__container {
    width: 90%;
  }

  .exp__content {
    width: 95%;
    align-items: center;
  }

  .btn {
    width: 100%;
  }

}
</style>
