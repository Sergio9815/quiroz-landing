<template>
  <section class="nav__links">

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

        <router-link v-animate-css.hover="'pulse'" to="/testimonios"
          @click.native="scrollToId('goTestimonios')">
          Testimonios
        </router-link>

        <router-link
          v-animate-css.hover="'pulse'"
          to="/contactenos"
          @click.native="scrollToId('goContact')">
          Contáctenos
        </router-link>

  </section>
</template>

<script>

export default {
  name: 'QgLinks',
  methods: {
    scrollToId(id) {
      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>

<style scoped>

#nav a {
  font-weight: lighter;
  color: var(--whiteLg);
  text-decoration: none;
  font-size: 20px;
}

#nav a:hover {
  color: var(--white);
}

#nav a.router-link-exact-active {
  color: var(--white);
  border-bottom: 2px solid var(--white);
}

/* Menu de navegacion */
.nav__links {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  width: 80%;
}

</style>
