<template>
    <div>
        
        <p></p>
            <router-view/>
        <p></p>

        <v-btn color="red" dark @click="irParaInicio">Voltar</v-btn>
        
    </div>
</template>

<script>
export default {
    methods:{
        irParaInicio(){
            this.$router.push({path:'/etiqueta'})
        },
    }
}
</script>

<style>

</style>
