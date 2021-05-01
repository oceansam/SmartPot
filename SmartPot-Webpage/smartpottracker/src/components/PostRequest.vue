<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Post-Request',
  props:{
    msg: String,
  },
  data(){
    return{
      postId: null,
      waterLevel: Number,

    }
  },
 


});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
  font-size: 65px;
}
</style>
