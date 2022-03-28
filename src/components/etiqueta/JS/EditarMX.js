export default {
   
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