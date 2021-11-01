<template>
  <div class="home">
    <qg-main/>
    <qg-exp/>
  </div>
</template>

<script>
import QgMain from '@/components/QgMain.vue';
import QgExp from '@/components/QgExp.vue';

export default {
  name: 'Home',
  components: {
    QgMain,
    QgExp,
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
