<template>
  <div>
    <div id="nav">
      <router-link to="/">
        <img class="nav__logo" src="../assets/logos/logo.png" alt="Quiroz-Govea Logo">
      </router-link>
      <qg-links/>
      <qg-social-btn/>
      <div v-show="showButton"
          @click="toggleMenu"
          v-animate-css.click="'rotateIn'" class="nav__menu-responsive">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grip-lines" class="svg-inline--fa fa-grip-lines fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>
      </div>
      <div v-show="!showButton"
          @click="toggleMenu"
          v-animate-css.click="'rotateIn'" class="nav__menu-responsive">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path></svg>
      </div>
      <qg-links2 v-on:closeLinks="toggleMenu" v-show="!showButton"/>
    </div>
  </div>
</template>

<script>

import QgSocialBtn from '@/components/QgSocialBtn.vue';
import QgLinks from '@/components/QgLinks.vue';
import QgLinks2 from '@/components/QgLinks2.vue';

export default {
  name: 'QgMenu',
  components: { QgSocialBtn, QgLinks, QgLinks2 },

  data() {
    return {
      showButton: true,
    };
  },

  methods: {
    toggleMenu() {
      this.showButton = !this.showButton;
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

/* Logo de la empresa */
.nav__logo {
  width: 170px;
  height: 110px;
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
    position: fixed;
    top: 0;
    background: rgba(41, 1, 17, 0.904);
    box-shadow: 0 8px 32px 0 rgba(121, 121, 121, 0.37);
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
  }

  .nav__logo {
    width: 140px;
    height: 85px;
    margin-left: 15px;
  }

  .nav__links, .nav__social {
    display: none;
  }

  .nav__menu-responsive {
    display: flex;
  }

}
</style>
