<template>
  <div id="app">
    <qg-menu v-on:activateZin="toggleZin"/>
    <router-view :activate="activate"/>
    <svg id="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a999a0" fill-opacity="1" d="M0,256L120,261.3C240,267,480,277,720,282.7C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
    </svg>
    <qg-footer/>
  </div>
</template>

<script>
import QgMenu from '@/components/QgMenu.vue';
import QgFooter from '@/views/Footer.vue';

export default {
  name: 'App',
  components: {
    QgMenu,
    QgFooter,
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
  --wine2: rgba(41, 1, 17, 0.767);
  --brownLg: #A999A0;
  --brown: #1700106b;
  --brownDg: #170010;
  --brownDg-2: #170010a1;
  --brownDg-3: #241a21;
  --chocolate: #BC8487;
  --chocolateLg: #bc8487b2;
  --blue: #7FD4FF;
  --blueLg: #7fd4ffc5;
  --gray: #c7c7c7;
  --grayDg: #adadad;
  --whiteLg: #dfdfdf;
  --white: #fff;
  --whiteTr: rgba(255, 255, 255, 0.651);
  --red: #F56A79;
  --redLg: #f56a78c5;
  --green: #71EFA3;
  --greenLg: #71efa3c0;
  --yellow: #FFD466;
}

/* --- --- -- MAIN STYLES -- --- --- */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--white);
}

/* html {
  scroll-behavior: smooth;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer-svg {
  margin-top: -20px;
  margin-bottom: -70px;
}
</style>
