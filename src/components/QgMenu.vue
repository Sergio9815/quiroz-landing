<template>
  <div>
    <div id="nav">
      <router-link to="/">
        <img class="nav__logo" src="../assets/logos/logo.png" alt="Quiroz-Govea Logo">
      </router-link>
      <section class="nav__links">
        <router-link v-animate-css.hover="'pulse'" to="/">Inicio</router-link>
        <router-link
        v-animate-css.hover="'pulse'" to="/notaria-express">Notaría express</router-link>
        <router-link
        v-animate-css.hover="'pulse'" to="/sobre-nosotros">Sobre nosotros</router-link>
        <router-link v-animate-css.hover="'pulse'" to="/testimonios">Testimonios</router-link>
        <!-- <router-link v-animate-css.hover="'pulse'" to="/ubicacion">Sucursales</router-link> -->
        <router-link
        v-animate-css.hover="'pulse'"
        to="/contactenos"
        @click.native="scrollToId('hola')">Contáctenos</router-link>
      </section>
      <section class="nav__social">
        <qg-social-btn/>
      </section>
      <div v-animate-css.hover="'headShake'" class="nav__menu-responsive">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>

import QgSocialBtn from '@/components/QgSocialBtn.vue';

export default {
  name: 'QgMenu',
  components: {
    QgSocialBtn,
  },

  methods: {
    scrollToId(id) {
      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>

<style scoped>

/* --- --- -- Menu BAR -- --- --- */
#nav {
  width: 100%;
  height: 100px;
  background-color: var(--wine);
  font-family: Lato;
  display: flex;
  align-items: center;
  justify-content: space-around;
  -webkit-box-shadow: 2px 3px 5px 0px rgba(186,186,186,1);
  -moz-box-shadow: 2px 3px 5px 0px rgba(186,186,186,1);
  box-shadow: 2px 3px 5px 0px rgba(186,186,186,1);
}

#nav a {
  font-weight: lighter;
  color: var(--whiteLg);
  text-decoration: none;
}

#nav a:hover {
  color: var(--white);
  border-bottom: 2px solid var(--white);
}

#nav a.router-link-exact-active {
  color: var(--white);
  border-bottom: 2px solid var(--white);
}

/* Logo de la empresa */
.nav__logo {
  width: 160px;
  height: 110px;
}

/* Menu de navegacion */
.nav__links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 780px;
}

/* contenedor para los botones de redes sociales */
.nav__social {
    display: flex;
    align-items: center;
    width: 200px;
    height: 20px;
}

.nav__menu-responsive {
  width: 20px;
  margin-right: 40px;
  color: var(--white);
  display: none;
  cursor: pointer;
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1000px) {
  #nav {
    height: 80px;
    justify-content: space-between;
  }

  .nav__logo {
    width: 120px;
    height: 90px;
    margin-left: 30px;
  }
/* CONTINUAR MENU EN MODO RESPONSIVE */
  .nav__links, .nav__social {
    display: none;
  }

  .nav__menu-responsive {
    display: flex;
  }

}
</style>
