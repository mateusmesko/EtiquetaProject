export default {
    data(){
        return{
            etiqueta:
            {
                dados:[],
                campo:[]
            }
        }
    },

    methods:{
        criar(){
            if(this.etiqueta.campo.linha == undefined)
            {
                if(this.etiqueta.dados.nome == undefined)
                {
                    window.alert("Campo nome vazio")
                }
                if(this.etiqueta.campo.secao == undefined)
                {
                    window.alert("Nenhuma seção criada")
                }
                if(this.etiqueta.campo.linha == undefined){
                    window.alert("Nenhuma linha criada")
                }
            }else{
            this.$http.post('dados',this.etiqueta)
            window.alert("etiqueta criada com sucesso")
            this.$router.push({path:'/etiqueta'})
            }
        }
    }
}