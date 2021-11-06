<template>
  <div>
    <div id="nav">
      <router-link to="/">
        <img class="nav__logo" src="../assets/logos/logo.png" alt="Quiroz-Govea Logo">
      </router-link>
      <qg-links/>
      <div class="hide">
        <qg-social-btn/>
      </div>
      <div v-show="showButton"
          @click="toggleMenu"
          v-animate-css.click="'rotateIn'" class="nav__menu-responsive">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#fff"/><path fill="#FFF" d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
      </div>
      <div v-show="!showButton"
          @click="toggleMenu"
          v-animate-css.click="'rotateIn'" class="nav__menu-responsive">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
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
      this.$emit('activateZin', this.showButton);
      this.showButton = !this.showButton;
    },
  },
};
</script>

<style scoped>

/* --- --- -- Menu BAR -- --- --- */
#nav {
  width: 100%;
  height: 70px;
  background-color: var(--wine);
  font-family: Lato;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  background: rgba(61, 26, 39, 0.986);
  box-shadow: 0 8px 32px 0 rgba(24, 24, 24, 0.37);
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  z-index: 1;
}

/* Logo de la empresa */
.nav__logo {
  width: 140px;
  height: 80px;
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
    justify-content: space-between;
  }

  .nav__logo {
    width: 140px;
    height: 85px;
    margin-left: 15px;
  }

  .nav__links, .hide  {
    display: none;
  }

  .nav__menu-responsive {
    display: flex;
  }

}
</style>
