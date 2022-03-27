export default {
    props:['enviar'],
    
    data(){
        return{
            etiqueta:
            {
                nome:undefined,
                codigo:undefined,
                altura:undefined,
                largura:undefined,
                espacamentoSup:0,
                espacamentoInf:0,
                espacamentoEsq:0, 
                espacamentoDir:0 
            }
        }
    },
    
    methods:{
		etiquetaRecebe(){  
            this.etiqueta=this.enviar.dados
		}
	},

    watch:{
		etiqueta:{
			deep:true,
			handler(){
				this.$emit('ReceivedDados', this.etiqueta)
			}
		}
	},
    
}