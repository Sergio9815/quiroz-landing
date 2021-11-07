<template>
  <div class="footer" id="goFooter">

    <div class="footer__main">
      <section class="footer__content">
        <figure>
          <img src="../assets/logos/logo.webp" alt="Quiroz-Govea Logo">
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
          <p>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
            quirozgovealegal@gmail.com</p>
          <p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
          (+507) 6676-5382</p>
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
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.footer__content {
  width: 32%;
  height: 55vh;
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

  svg {
    width: 18px;
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
