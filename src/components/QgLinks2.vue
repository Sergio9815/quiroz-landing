<template>
    <section
          @click="toggleLinks" class="nav__links2 animate__animated animate__fadeInLeft">

        <router-link v-animate-css.hover="'pulse'" to="/"
          @click.native="scrollToId('goInicio')">
          Inicio
        </router-link>

        <router-link
          v-animate-css.hover="'pulse'" to="/notaria-express"
          @click.native="scrollToId('goNotaria')">
          Notaría express
        </router-link>

        <router-link
          v-animate-css.hover="'pulse'" to="/sobre-nosotros"
          @click.native="scrollToId('goAbout')">Sobre nosotros
        </router-link>

        <router-link
          v-animate-css.hover="'pulse'" to="/testimonios"
          @click.native="scrollToId('goTestimonios')">
          Testimonios
        </router-link>

        <router-link
          v-animate-css.hover="'pulse'"
          to="/contactenos"
          @click.native="scrollToId('goContact')">
          Contáctenos
        </router-link>
        <qg-social-btn/>
    </section>
</template>

<script>

import QgSocialBtn from '@/components/QgSocialBtn.vue';

export default {
  name: 'QgLinks2',
  components: { QgSocialBtn },
  methods: {
    scrollToId(id) {
      document.getElementById(id).scrollIntoView();
    },
    toggleLinks() {
      this.$emit('closeLinks');
    },
  },
};
</script>

<style scoped>
#nav a {
  font-weight: lighter;
  color: var(--brown);
  text-decoration: none;
}

.nav__menu-responsive {
  width: 20px;
  margin-right: 40px;
  color: var(--brown);
  display: none;
  cursor: pointer;
}

.nav__links2 {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 100px;
  position: fixed;
  padding-top: 50px;
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  top: 68px;
  left: -100%;
  text-align: center;
  transition: all .5s;
  z-index: 0;
}

#nav a.router-link-exact-active {
  color: var(--brown);
  border-bottom: 2px solid var(--brown);
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1000px) {
  .nav__links2 {
    display: flex;
    left: 0;
  }

  #nav a:hover {
    color: var(--wine);
  }
}

</style>
