import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        //aqui van a ir todas nuestras variables globales por asi decirlo

        frutas:[
            {nombre:"Manzana",cantidad:0},
            {nombre:"Pera",cantidad:0},
            {nombre:"Naranja",cantidad:0},

        ]
    },
    //las mutaciones es en donde nosotros vamos a poder realizar cambios en nuestras variables
    mutations:{
        aumentar(state,index){
            state.frutas[index].cantidad++;

        },
        reiniciar(state){
            console.log("entre");
            for(let i = 0; i< state.frutas.length ; i++){
                console.log(state.frutas[i]);
                state.frutas[i].cantidad = 0;
            }
        }
    },
    actions:{
        
    }
})

//para poder acceder a estas variables desde nuestros componentes , vamos a nuestro componente y ahi importamos los mapas para maperar nuestra store