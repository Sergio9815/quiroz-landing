<template>
  <div class="exp">
    <h1 class="exp__title"> {{ title }} </h1>

    <section class="exp__container" data-aos="zoom-in-left">
      <div  class="exp__container-video">
            <YoutubeEmbedLite
              vid="XKOO0FAkL0U"
              thumb-quality="sd"
              :params="{start: 0}"
              id="intro"
            />
      </div>
        <div class="exp__content">
            <p>Contamos con más de <b>37 años de experiencia</b>, lo cual nos permite decirle,
              consulte con Quiroz Govea & Asociados.</p>
            <a v-animate-css.hover="'pulse'" class="btn" href="https://api.whatsapp.com/send?phone=+507 66765382&text=Saludos, busco información sobre su servicio legal!"
            ><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" class="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
            Escríbanos</a>
        </div>
    </section>

  </div>
</template>

<script>
import AOS from 'aos';
import YoutubeEmbedLite from '@miyaoka/vue-youtube-embed-lite';

export default {
  name: 'Exp',
  components: { YoutubeEmbedLite },
  data() {
    return {
      title: 'Experiencia garantizada',
    };
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
  width: 80%;
  gap: 40px;
}

.exp__content {
  width: 30%;
  height: 200px;
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

  svg {
    width: 16px;
  }

.btn {
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--greenLg);
  text-decoration: none;
  border-radius: 50px;
  color: var(--brownDg);
}

.btn:hover { background-color: var(--green); }

.exp__container-video {
  background-color: var(--brown);
  position: relative;
  width: 618px;
  height: 315px;
  border-radius: 150px;
}

#intro {
  border-radius: 500px;
}

thumb {
  border-radius: 200px;
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
    padding: 0;
  }
}

@media only screen and (max-width: 1040px) {
  .exp__container {
    flex-direction: column;
    width: 100%;
  }

.exp__content {
  width: 60%;
}
    .btn {
    width: 100%;
  }
}

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
    width: 95%;
  }

  .exp__content {
    width: 95%;
    align-items: center;
  }

  .btn {
    width: 100%;
  }

  .exp {
    margin-bottom: -75px;
  }
}

@media only screen and (max-width: 611px) {
.exp__content {
  margin-top: -20px;
}
}

@media only screen and (max-width: 548px) {
  .exp__content {
    margin-top: -50px;
  }
}

@media only screen and (max-width: 500px) {
  .exp__content {
    margin-top: -70px;
  }
}

@media only screen and (max-width: 450px) {
  .exp__content {
    margin-top: -100px;
  }
}

@media only screen and (max-width: 400px) {
  .exp__content {
    margin-top: -120px;
  }
}

@media only screen and (max-width: 370px) {
  .exp__content {
    margin-top: -140px;
  }
}

@media only screen and (max-width: 300px) {
  .exp__content {
    margin-top: -190px;
  }
}
</style>
