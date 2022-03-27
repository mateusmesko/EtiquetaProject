<template>
  <nav>
   

    <v-app-bar color="grey darken-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group active-class="light-blue text--accent-4">

          <v-list-item to="/">
            <v-list-item-title>
              inicio
            </v-list-item-title>
          </v-list-item>
        
          <v-list-item to="/etiqueta">
            <v-list-item-title>
              etiqueta
            </v-list-item-title>
          </v-list-item>
        
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style>

</style>
