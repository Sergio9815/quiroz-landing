<template>
  <div id="app">
    <div id="nav">
      <img class="nav__logo" src="./assets/logos/logo.png" alt="Quiroz-Govea Logo">
      <section class="nav__links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/Notaria">Notaría express</router-link>
        <router-link to="/about">Sobre nosotros</router-link>
        <router-link to="/Testimonios">Testimonios</router-link>
        <router-link to="/Locations">Sucursales</router-link>
        <router-link to="/Contact" @click.native="scrollToId('hola')">Contáctenos</router-link>
      </section>
      <section class="nav__social">
        Social
      </section>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    scrollToId(id) {
      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>
<style>

/* --- --- -- COLORS -- --- --- */
:root {
  --wine: #290111;
  --brownLg: #A999A0;
  --brown: #1700106b;
  --brownDg: #170010;
  --blue: #7FD4FF;
  --gray: #c7c7c7;
  --whiteLg: rgb(204, 204, 204);
  --white: #fff;
  --red: #F56A79;
  --green: #71EFA3;
}

/* --- --- -- MAIN STYLES -- --- --- */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--white);
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* --- --- -- LOCAL FONTS -- --- --- */
@font-face {
  font-family: 'Lato';
  src: local('Lato'),
    url('./assets/fonts/Lato-Regular.ttf') format('truetype');
  font-weight: 400;
}

/* --- --- -- Menu BAR -- --- --- */
#nav {
  width: 100%;
  height: 100px;
  background-color: var(--wine);
  font-family: Lato;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#nav a {
  font-weight: lighter;
  color: var(--whiteLg);
  text-decoration: none;
}

#nav a:hover {
  color: var(--white);
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

.nav__links {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 780px;
}
</style>
