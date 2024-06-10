<template>
  <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(fruta,indice) in frutas" :key="indice" @click="aumentar(indice)">
    <div class="ms-2 me-auto">
      <div class="fw-bold"> {{ indice + 1 }}. {{ fruta.nombre }}</div>

    </div>
    <span class="badge text-bg-primary rounded-pill">{{fruta.cantidad}}</span>
  </li>
</ol>


</template>

<script>

//mapeamos nuestra store para usar las variables globales y usamos el mapMutations que nos permite usar los metodos creados en el state
import { mapState , mapMutations} from 'vuex';


export default {
    name:"FruitList",
    computed:{
        ...mapState(['frutas'])    
    },
    //para usar los metodos que modifican nuestro store usamos mapMutations
    methods:{
        ...mapMutations(['aumentar']),

    }
}
</script>

<style>

</style>