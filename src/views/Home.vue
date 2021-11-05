<template>
  <div class="home">
    <qg-main />
    <exp :activate="activate"/>
    <notaria/>
    <testimonios :activate="activate"/>
  </div>
</template>

<script>
import QgMain from '@/views/Main.vue';
import Exp from '@/views/Exp.vue';
import Notaria from '@/views/Notaria.vue';
import Testimonios from '@/views/Testimonios.vue';

export default {
  name: 'Home',
  components: {
    Exp,
    Notaria,
    Testimonios,
    QgMain,
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
