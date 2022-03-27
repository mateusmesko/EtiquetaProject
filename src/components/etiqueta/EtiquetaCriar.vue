<template>
    <div>
        <h1 >etiqueta criar</h1>

        <InputDados  @ReceivedDados="etiqueta.dados = $event"/>

    <hr>

        <InputConteudo  @ReceivedCampos="etiqueta.campo = $event"/>
        
    <hr>

        <Visual style="text-align: center" :etiqueta="etiqueta" />

        <v-btn @click="criar" block>Salvar</v-btn>
      
    </div>
</template>

<script>
import InputConteudo from './inputs/Conteudo.vue'
import InputDados from './inputs/Dados'
import Visual from './inputs/Visual'

import CriarMX from './JS/CriarMX'

export default {
    components:{InputConteudo,InputDados,Visual},
    mixins:[CriarMX]
}
</script>

<style>

</style>
