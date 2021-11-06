<template>
  <div class="footer" id="goFooter">

    <div class="footer__main">
      <section class="footer__content">
        <figure>
          <img src="../assets/logos/logo.png" alt="Quiroz-Govea Logo">
        </figure>
        <qg-social-btn />
      </section>

      <section id="nav" class="footer__content">
        <h3>Enlaces</h3>
        <qg-links3/>
      </section>

      <section id="contact-info" class="footer__content">
        <h3 id="cont">Contacto</h3>
        <div class="content__contact">
          <p><i class="far fa-envelope"></i> quirozgovealegal@gmail.com</p>
          <p><i class="fas fa-phone"></i> (+507) 6676-5382</p>
        </div>
      </section>
    </div>

    <div class="footer__info">
      <div class="info__content">
        <p>Quiroz Govea & Asociados © 2021 | All Rights Reserved |</p>
        <p>Web Design and Support by @GRAFIKE_</p>
      </div>
    </div>

  </div>
</template>

<script>
import QgSocialBtn from '@/components/QgSocialBtn.vue';
import QgLinks3 from '@/components/QgLinks3.vue';

export default {
  components: { QgSocialBtn, QgLinks3 },
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6A5C66;
  scroll-behavior: smooth;
  margin-top: 65px;
  flex-direction: column;
}

.footer__main {
  width: 90%;
  height: 60vh;
  /* background-color: lightblue; */
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.footer__content {
  width: 32%;
  height: 55vh;
  /* background-color: lightcoral; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.footer__content img {
  width: 80%;
}

.footer__content h3 {
  align-self: flex-start;
  margin-left: 35px;
  font-size: 23px;
  color: var(--white);
}

.content__contact {
  width: 80%;
  /* background-color: aquamarine; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

#cont {
  margin-top: -90px;
}

#contact-info {
  margin-left: -80px;
}

.footer__content p {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: var(--whiteLg);
}

.footer__info {
  width: 100%;
  height: 125px;
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: var(--brownDg-3);
  color: var(--white);
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1000px) {
  .footer {
    height: 20vh;
  }
  .footer__main {
    display: none;
  }
}

</style>
