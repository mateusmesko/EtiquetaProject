import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'

import Etiqueta from './components/etiqueta/EtiquetaInicio'
import EtiquetaLista from './components/etiqueta/EtiquetaLista'
import EtiquetaDetalhe from './components/etiqueta/EtiquetaDetalhe.vue'
import EtiquetaCriar from './components/etiqueta/EtiquetaCriar'

Vue.use(Router)

export default new Router({
    mode:'history',
    
    routes:[{    
        path:'/',
        component:Inicio
    },{
        path:'/etiqueta',
        component:Etiqueta,
        props:true,
        children:[
            {path:'',component:EtiquetaLista},
            {path:':id',component:EtiquetaDetalhe,props:true},
          
        ]
    },
    {
        path:'/criar',
        component:EtiquetaCriar,props:true,
    }]
})