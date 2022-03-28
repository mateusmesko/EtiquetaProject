export default {
    props:['enviar'],
    data(){
        return{
            campo:
            {
                secao:[{
                    largura:undefined,
                    espacamentoEsq:0
                    }
                ],
                linha:[
                    {
                        tipoFont:0,
                        tamanFont:1,
                        quebraTexto:undefined,
                        espLinha:undefined,
                        espacamentoInf:0,
                        espacamentoEsq:0,
                        secao:0
                    }
                ]
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