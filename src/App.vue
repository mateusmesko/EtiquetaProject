<template>
  <v-app>
      <Menu></Menu> 
      <router-view/>
  </v-app>
</template>

<script>
import Menu from './components/navegacao/Menu.vue'

export default {
    components:{Menu}
};
</script>
