<template>
<div>

  <HelloWorld msg="Smart Pot"/>
  <PlantContainer/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/PostRequest.vue';
import PlantContainer from "./components/PlantContainer.vue";
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    PlantContainer
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Montserrat:wght@200;300&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e7f1e1;
  margin-top: 60px;
  
}
*{
  background-color: #2F3E46;
 
}
</style>
