<template>
    <div>

        <div v-if="enviar!=undefined">
            {{etiquetaRecebe()}}
        </div>
        <h3 style="margin-left:7%" >Dados da secao:</h3>
        <v-container v-for="(secoes, i) in campo.secao" :key="i"> <b>seção:{{i+1}}</b>
            <v-row  >
                
                <v-col cols="12" md="3"  > 
                    <v-text-field type="number" v-model="campo.secao[i].largura" label="Nome" required/>     
                </v-col>
                <v-col cols="12" md="3"  >
                    <v-text-field type="number" v-model.number="campo.secao[i].espacamentoEsq" label="espaçamento da esquerda" required/>
                </v-col>
                
                <v-btn style="margin-left:80%" color="red" @click="campo.secao.splice(i,1)">REMOVER</v-btn>
            </v-row>
            <p></p>
          
        </v-container>
  <v-btn style="margin-left:80%" color="green" @click="adicionarSecao">+adicionar secao</v-btn>

    <h3 style="margin-left:7%">informações da etiqueta:</h3>

    <v-container v-for="(linha, i) in campo.linha" :key="i" > Linha:{{i+1}}
      
            <v-row  >
              
                <v-col cols="12" md="3"  > 
                    <v-select v-model="campo.linha[i].tipo" :items="campoOpcoes" label="campo" required/>     
                </v-col>

                <v-col cols="12" md="3"  > 
                    <v-select type="number" :items="tipos" v-model.number="campo.linha[i].tipoFont" label="tipo de fonte" required/>     
                </v-col>

                <v-col cols="12" md="3"  > 
                    <v-select type="number" :items="tamanhos" v-model.number="campo.linha[i].tamanFont" label="Tamanho da fonte" required/>     
                </v-col>

                <v-col cols="12" md="3"  > 
                    <v-text-field type="number" v-model.number="campo.linha[i].quebraTexto" label="Posição de quebra de texto" required/>     
                </v-col>

                
                <v-col cols="12" md="3"  > 
                    <v-text-field type="number" v-model.number="campo.linha[i].espLinha" label="Espaçamento entre linhas (mm)" required/>     
                </v-col>

                <v-col cols="12" md="3"  > 
                    <v-text-field type="number" v-model.number="campo.linha[i].espacamentoInf" label="Espaçamento inferior (mm)" required/>     
                </v-col>

                <v-col cols="12" md="3"  > 
                    <v-text-field type="number" v-model.number="campo.linha[i].espacamentoEsq" label="Espaçamento da esquerda (mm)" required/>     
                </v-col>

                <v-col cols="12" md="3"  > 
                   <v-text-field type="number"  v-model.number="campo.linha[i].secao" :label="`Seção`" required/>
                        
                
                </v-col>

                <b></b>
                <v-btn style="margin-left:80%" color="red" @click="campo.linha.splice(i,1)">REMOVER</v-btn>
            </v-row>
            <p></p>
           
        
    </v-container>
     <v-btn style="margin-left:80%" color="green" @click="adicionarLinha">+adicionar linha</v-btn>

    </div>
</template>
<script>
export default {
    props:['enviar'],
    data(){
        return{
            campo:
            {
                secao:[],
                linha:[]
            },
            campoOpcoes:['Nome da empresa', 'Código do produto', 'Nome do produto', 'Código + Nome do produto', 'Categoria do produto', 'Valor do produto', 'Codigo de barras', 'Qr code', 'Texto personalizado'],
            tipos:[0,1,2,3,4,5,6,7,8],
            tamanhos:[1,2,3,4,5,6,7,8,9]
        }
    },
    methods:{
        adicionarSecao(){
            this.campo.secao.push({
                 nome:this.campo.secao.largura
            })
        }, adicionarLinha(){
            this.campo.linha.push({
                 nome:this.campo.linha.largura
            })
        },
        etiquetaRecebe(){
            this.campo=this.enviar.campo
		}
    },
    watch:{
		campo:{
			deep:true,
			handler(){
				this.$emit('ReceivedCampos', this.campo)
			}
		}
	},
}
</script>

<style>

</style>
