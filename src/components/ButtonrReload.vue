<template>
  <div>
    <button type="button" class="btn btn-danger" @click="reiniciar">Resetear</button>
  </div>
</template>

<script>

import { mapMutations} from 'vuex';

export default {
    name:"ButtonReload",
    methods:{
        ...mapMutations(['reiniciar'])
    }
};
</script>

<style></style>
