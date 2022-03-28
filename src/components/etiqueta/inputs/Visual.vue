<template>
    <div >
        <div style="display:inline-table; " v-for="colunas in etiqueta.dados.coluna" :key="colunas">   
           <div style="border: 1px inset black;border-radius: 7px;display:inline-table;" :style="`margin:${etiqueta.dados.espColuna/2}mm;width:${etiqueta.dados.largura}mm;height:${etiqueta.dados.altura}mm`">
                <div style="display:table;position:absolute;" :style="`margin-left:${etiqueta.dados.espacamentoEsq-etiqueta.dados.espacamentoDir}mm;margin-top:${etiqueta.dados.espacamentoSup-etiqueta.dados.espacamentoInf}mm`">
                   <div v-for="(campos,i) in etiqueta.campo.linha" :key="i" style="display:table;position:absolute">
                        <div style="display:table;position:absolute" :style="
                        `font-size:${etiqueta.campo.linha[i].tipoFont+etiqueta.campo.linha[i].tamanFont}mm;
                         margin-left:${etiqueta.campo.linha[i].espacamentoEsq+etiqueta.campo.secao[etiqueta.campo.linha[i].secao].espacamentoEsq}mm;
                         top:${etiqueta.campo.linha[i].espacamentoInf}px`">
                         CAMPO{{i+1}}
                        </div>
                   </div> 
                </div>      
           </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['etiqueta']
}
</script>

<style>
    
</style>
