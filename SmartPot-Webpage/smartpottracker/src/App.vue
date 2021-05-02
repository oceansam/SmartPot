<template>
<div>

  <Header title="Smart Pot"/>
  <div class = "plantGrid">
    <PlantContainer :plantData="plant1"/>
    <PlantContainer :plantData="plant2"/>
    <PlantContainer :plantData="plant3"/>


    
  </div>

  <h2>Creators</h2>
  <p>Abdullah Aftab</p>
  <p>Jonathon Edey</p>
  <p>Kyle Choo Mang</p>
  <p>Samee Chowdhury</p>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import PlantContainer from "./components/PlantContainer.vue";

export default defineComponent({
  name: 'App',
  components: {
    Header,
    PlantContainer
  },
  data(){
    return{
      plant1:
          {
            name: 'Tomato',
            date: '2021-05-01'
          },
      plant2:
          {
            name: 'Mint',
            waterLevel: 45,
            tempLevel: 34,
            humidLevel: 23,
            date:'2021-04-30'
          },
      plant3:
          {
            name:'Potato',
            waterLevel: 65,
            tempLevel: 43,
            humidLevel: 55,
            date:'2021-04-30'
          }
      
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