<template>
  <div id="app">
    <qg-menu v-on:activateZin="toggleZin"/>
    <router-view :activate="activate"/>
  </div>
</template>

<script>
import QgMenu from '@/components/QgMenu.vue';

export default {
  name: 'App',
  components: {
    QgMenu,
  },
  data() {
    return {
      activate: false,
    };
  },
  methods: {
    toggleZin(value) {
      this.activate = value;
    },
  },
};
</script>

<style>

/* --- --- -- COLORS -- --- --- */
:root {
  --wine: rgba(41, 1, 17, 90%);
  --brownLg: #A999A0;
  --brown: #1700106b;
  --brownDg: #170010;
  --brownDg-2: #170010be;
  --blue: #7FD4FF;
  --gray: #c7c7c7;
  --whiteLg: #dfdfdf;
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

</style>
