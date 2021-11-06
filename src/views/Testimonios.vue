<template>
  <div class="test-container" id="goTestimonios">
    <div class="bg-container">
      <h1 class="test__title"> Clientes satisfechos </h1>
      <p>En la firma Quiroz Govea & Asociados la satisfacción
      de nuestros clientes es nuestro compromiso.</p>
      <qg-slider :activate="activate"/>
    </div>
  </div>
</template>

<script>
import QgSlider from '@/components/QgSlider.vue';

export default {
  components: { QgSlider },
  name: 'Testimonios',
  props: {
    activate: Boolean,
  },
};
</script>

<style scoped>

  .test-container {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/images/img-8.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .bg-container {
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: var(--wine2);
    position: absolute;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--white);
  }

  .test__title {
    margin-top: 75px;
  }

  .bg-container p{
    color: var(--whiteLg);
  }

  /* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1000px) {
  .test-container {
    margin-top: 150px;
  }

  .bg-container p{
    width: 80%;
  }
}
</style>
