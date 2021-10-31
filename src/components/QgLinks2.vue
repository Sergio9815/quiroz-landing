<template>
    <section
          @click="toggleLinks" v-animate-css.click="'fadeIn'" class="nav__links2">
        <router-link
          v-animate-css.hover="'pulse'" to="/">Inicio
        </router-link>
        <router-link
          v-animate-css.hover="'pulse'" to="/notaria-express">Notaría express
        </router-link>
        <router-link
          v-animate-css.hover="'pulse'" to="/sobre-nosotros">Sobre nosotros
        </router-link>
        <router-link
          v-animate-css.hover="'pulse'" to="/testimonios">Testimonios
        </router-link>
        <!-- <router-link v-animate-css.hover="'pulse'" to="/ubicacion">Sucursales</router-link> -->
        <router-link
          v-animate-css.hover="'pulse'"
          to="/contactenos"
          @click.native="scrollToId('hola')">
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
    width: 100%;
    height: 88vh;
    margin-top: 692px;
    background-color: var(--white);
    position: absolute;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

#nav a.router-link-exact-active {
  color: var(--brown);
  border-bottom: 2px solid var(--brown);
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1000px) {
  .nav__links2 {
      display: flex;
  }

  #nav a:hover {
    color: var(--wine);
  }
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 500px) {
  .nav__links2 {
    height: 83vh;
    margin-top:728px;
  }
}
</style>
