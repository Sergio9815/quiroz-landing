<template>
  <div class="home">
    <qg-main/>
  </div>
</template>

<script>
import QgMain from '@/components/QgMain.vue';

export default {
  name: 'Home',
  components: {
    QgMain,
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
