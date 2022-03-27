<template>
   <div>
      {{carregar()}}
      <v-card class="mx-auto" max-width="98%" tile>
        <v-btn color="green" dark @click="CriarEtiqueta">+CRIAR</v-btn>
        <v-list flat>
          <v-subheader>ETIQUETAS:</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(etiqueta, i) in etiqueta" :key="i">
                <v-list-item>

                  <b>nome:</b>
                  <v-list-item-title v-text="etiqueta.dados.nome"></v-list-item-title>

                  <b>Codigo:</b>
                  <v-list-item-title v-text="etiqueta.dados.codigo"></v-list-item-title>
            
                  <v-btn color="green" :to="`etiqueta/${i}`"  style="margin:5mm">EDITAR</v-btn>
                  <v-btn color="red" @click="deletar(etiqueta.id)" style="margin:5mm">EXCLUIR</v-btn>
            
            </v-list-item>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
   </div>
</template>

<script>
export default {
  data()
  {
    return{
      etiqueta:[]
    }
  },

  methods:{
    
    deletar(id)
    {
      this.$http.delete(`/dados/${id}`)
    },

    carregar(){
      this.$http.get('dados').then(res=>
      {
        this.etiqueta=res.data
      })
    },

    CriarEtiqueta(){
      this.$router.push({path:'/criar'})
    }
  }
}
</script>

<style>

</style>
