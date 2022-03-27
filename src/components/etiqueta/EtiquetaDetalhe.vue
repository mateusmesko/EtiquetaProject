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

export default {
    props:['id'],
    components:{InputConteudo,InputDados,Visual},
    data(){
        return{
            etiqueta:[],
            ValorRecebido: {
                    dados:[],
                    campo:[]
                }
        }
    },
    methods:{
        editar(){
			const metodo=this.etiqueta[this.id].id ? 'patch':'post'
			const finalUrl=this.etiqueta[this.id].id?`/${this.etiqueta[this.id].id}`:''
			this.$http[metodo](`/dados/${finalUrl}`,this.ValorRecebido)
		},
        
    },
    created(){
        this.$http.get('dados').then(res=>
        {
            this.etiqueta=res.data
        })
    }
    
}
</script>

<style>

</style>
