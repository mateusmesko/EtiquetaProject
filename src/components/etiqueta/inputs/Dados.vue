<template>
    <div>
        <div v-if="enviar!=undefined">
        {{etiquetaRecebe()}}
           {{enviar.dados}}
           {{etiqueta}}
        </div>

        <v-container>Dados do Modelo:
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field v-model="etiqueta.nome" label="Nome" required/>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field v-model="etiqueta.codigo" label="Codigo" />
                </v-col>
            </v-row>
        </v-container> 
   
   <v-container>Colunas:
         <v-row>
                <v-col cols="12" md="3">
                    <v-text-field type="number" v-model.number="etiqueta.coluna" label="Numero de colunas" />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field type="number" v-model.number="etiqueta.espColuna" label="Espaçamento entre colunas" />
                </v-col>
            </v-row>
        </v-container> 

        <v-container>Etiqueta - Dimensões:
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field type="number" v-model.number="etiqueta.altura" label="Altura" />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field type="number" v-model.number="etiqueta.largura" label="Largura" />
                </v-col>
            </v-row>

            

             <v-row>
                <v-col cols="12" md="3">
                    <v-text-field type="number" v-model.number="etiqueta.espacamentoSup" label="Espaçamento superior" />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field type="number" v-model.number="etiqueta.espacamentoInf" label="Espaçamento inferior" />
                </v-col>

                 <v-col cols="12" md="3">
                    <v-text-field type="number" v-model.number="etiqueta.espacamentoEsq" label="Espaçamento da esquerda" />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field type="number" v-model.number="etiqueta.espacamentoDir" label="Espaçamento da direita" />
                </v-col>
            </v-row>
        </v-container> 
     
    </div>
</template>

<script>

import DadosMX from './dadosMX'

export default {
        mixins:[DadosMX]
    }

</script>

<style>

</style>
