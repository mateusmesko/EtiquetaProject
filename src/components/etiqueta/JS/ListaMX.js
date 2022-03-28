export default {
    data()
    {
      return{
        etiqueta:[]
      }
    },
  
    methods:{
      
      deletar(id)
      {
        this.$http.delete(`/dados/${id}`)
      },
  
      carregar(){
        this.$http.get('dados').then(res=>
        {
          this.etiqueta=res.data
        })
      },
  
      CriarEtiqueta(){
        this.$router.push({path:'/criar'})
      }
    }
  }