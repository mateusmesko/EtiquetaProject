<template>
    <div>

        <div v-if="enviar!=undefined">
            {{etiquetaRecebe()}}
        </div>
        <!--valores inputados da seção-->
        <h3 style="margin-left:7%" >Dados da secao:</h3>
        <v-container v-for="(secoes, i) in campo.secao" :key="i"> <b>seção:{{i+1}}</b>
            <v-row  >
                <v-col cols="12" md="3"  > 
                    <v-text-field type="number" v-model="campo.secao[i].largura" label="largura" required/>     
                </v-col>

                <v-col cols="12" md="3"  >
                    <v-text-field type="number" v-model.number="campo.secao[i].espacamentoEsq" label="espaçamento da esquerda" required/>
                </v-col>
                
                <v-btn style="margin-left:80%" color="red" @click="campo.secao.splice(i,1)">REMOVER</v-btn>
            </v-row>
            <p></p>
          
        </v-container>
    <v-btn style="margin-left:80%" color="green" @click="adicionarSecao">+adicionar secao</v-btn>

    <!--valores inputados das linhas-->
    <h3 style="margin-left:7%">informações da etiqueta:</h3>

    <v-container v-for="(linha, i) in campo.linha" :key="i" > <b>Linha:{{i+1}}</b>
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
import CampoMX from './conteudoMX'

export default {
        mixins:[CampoMX]
    }

</script>

<style>

</style>
