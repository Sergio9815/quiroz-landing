<template>
  <div class="home">
    <qg-main/>
    <qg-exp :activate="activate"/>
    <qg-notaria/>
  </div>
</template>

<script>
import QgMain from '@/components/QgMain.vue';
import QgExp from '@/components/QgExp.vue';
import QgNotaria from '@/components/QgNotaria.vue';

export default {
  name: 'Home',
  components: {
    QgMain,
    QgExp,
    QgNotaria,
  },
  props: {
    activate: Boolean,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-content: center;
}
</style>
