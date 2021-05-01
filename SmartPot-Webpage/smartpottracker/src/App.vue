<template>
<div>

  <HelloWorld msg="Smart Pot"/>
  <div class = "plantGrid">
  <div :key="plant.name" v-for="plant in plants">
    <PlantContainer :plantData="plant"/>
 
  </div>
  </div>
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
  },
  data(){
    return{
      plants : [
          {
            name: 'Tomato',
            date: '2021-05-01'
          },
          {
            name: 'Mint',
            date:'2021-04-30'
          },
          {
            name:'Potato',
            date:'2021-04-30'
          }
      ],
    }
  },
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
.plantGrid{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
 
}
*{
  background-color: #2F3E46;
 
}
</style>
