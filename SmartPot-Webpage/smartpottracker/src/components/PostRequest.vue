<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="fetchData()">REQUEST</button>
    <p>{{waterLevel}}</p>

   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Post-Request',
  data(){
    return{
      postId: null,
      waterLevel: Number,

    }
  },
  methods:{
    fetchData(){
    // Simple GET request using fetch
    fetch("https://reqres.in/api/articles")
      .then(response => response.json())
      .then(data => this.waterLevel = data.page)
    }
  }


});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
