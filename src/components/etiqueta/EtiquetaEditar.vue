<template>
    <div>
        <InputDados :enviar="etiqueta[id]"  @ReceivedDados="ValorRecebido.dados = $event"/>
        
        <InputConteudo  :enviar="etiqueta[id]"   @ReceivedCampos="ValorRecebido.campo = $event"/>
    
        <hr>

        <Visual style="text-align: center" :etiqueta="ValorRecebido" />

        <v-btn @click="editar" block>Salvar</v-btn>

    </div>   
</template>

<script>
import InputConteudo from './inputs/Conteudo'
import InputDados from './inputs/Dados'
import Visual from './inputs/Visual'
import EditarMX from './JS/EditarMX'

export default {
    props:['id'],
    components:{InputConteudo,InputDados,Visual},
    mixins:[EditarMX]
}
</script>

<style>

</style>
