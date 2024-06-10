<template>
  <div id="app" class="container">
    <AppCabecera/>
    <FruitList/>
    <ButtonrReload/>
  </div>
</template>

<script>
import AppCabecera from './components/AppCabecera.vue'
import ButtonrReload from './components/ButtonrReload.vue'
import FruitList from './components/FruitList.vue'




export default {
  name: 'App',
  components: {
    AppCabecera,
    FruitList,
    ButtonrReload
    }
}
</script>

<style>

</style>
