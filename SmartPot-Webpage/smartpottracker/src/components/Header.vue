<template>
  <div>
    <h1>{{ title }}</h1>


  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props:{
    title: String,
    fontsize: Number
  },

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
  font-size: 65px;
}
</style>