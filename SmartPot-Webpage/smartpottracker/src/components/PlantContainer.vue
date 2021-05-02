<template>
    <div>
        <div class="container">
           
            <div class="plant">
                    <div class="plant-header">
                        <img @click="createPost()" src="./../assets/refresh.svg" alt ="refreshButton">
                    </div>
        
                    <h1>{{plantData.name}}</h1> 
                    <div class= "tooltip">
                            <span class="tooltiptext">Moisture</span>

                        <svg class="levelStatus" height= '80' width= '80' >
                            <circle
                                class="progress-ring__circle"
                                stroke="#2F3E46"
                                stroke-width="4"
                                fill="#75b7ee"
                                r="36"
                                cx="40"
                                cy="40"/>
                                <text x="24" y="50" font-family="Verdana" font-size="25" fill= "#e7f1e1">{{waterLevel}}</text>
                        </svg>
                        </div>
                    <div>

                        <div class= "tooltip">
                            <span class="tooltiptext">Temperature</span>

                        <svg class="levelStatus" height= "80" width= "80">
                            <circle
                                class="progress-ring__circle"
                                stroke="#2F3E46"
                                stroke-width="4"
                                fill="#ee6a6a"
                                r="36"
                                cx="40"
                                cy="40"/>
                                <text x="24" y="50" font-family="Verdana" font-size="25" fill= "#e7f1e1">{{tempLevel}}</text>

                        </svg>
                        </div>
                        <div class= "tooltip">
                            <span class="tooltiptext">Humidity</span>
                            <svg class="levelStatus" height= "80" width= "80">
                                <circle
                                    class="progress-ring__circle"
                                    stroke="#2F3E46"
                                    stroke-width="4"
                                    fill="#d3d148"
                                    r="36"
                                    cx="40"
                                    cy="40"/>
                                    <text x="24" y="50" font-family="Verdana" font-size="25" fill= "#e7f1e1">{{humidLevel}}</text>

                            </svg>
                        </div>
                    </div>
                    <WarningStatus :tempLevel="tempLevel" :waterLevel="waterLevel" :humidLevel="humidLevel"/>
                    <div class="date">
                        <p>{{plantData.date}}</p>
                    </div>     
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import WarningStatus from "./WarningStatus.vue";
import { defineComponent } from 'vue'
import axios from 'axios';


export default defineComponent({

    name:'PlantContainer',
    components:{
        WarningStatus,
    },
    data(){
        return{
            waterLevel : 99,
            tempLevel: 99,
            humidLevel: 99,
        }
    },
    props:{
        plantData: Object,
        
    },
   methods:{
        createPost(){     

        axios.get('https://b2cb7c62963e.ngrok.io/web/stats')
            .then(response =>{
                console.log(response.data.event)
                const data = response.data.stats
                this.waterLevel = data.moisture;
                this.tempLevel = data.temp;
                this.humidLevel = data.humidity
            })
            .catch(error => console.log(error))
            
            
        }
    },
    created(){
        if (this?.plantData?.waterLevel === undefined)
        {
        axios.get('https://b2cb7c62963e.ngrok.io/web/stats')
            .then(response => {
                const data = response.data.stats
                this.waterLevel = data.moisture;
                this.tempLevel = data.temp;
                this.humidLevel = data.humidity
            })
            .catch(error => console.log(error))
            .then(() => {
                // default safe case
                this.waterLevel = 53;
                this.tempLevel = 23;
                this.humidLevel = 65;
            });

        }
        else
        {
            this.waterLevel = this.plantData.waterLevel;
            this.tempLevel = this.plantData.tempLevel;
            this.humidLevel = this.plantData.humidLevel;
        
        }
    },
    mounted(){
        if (this?.plantData?.name == "Tomato"){
            axios.post('https://b2cb7c62963e.ngrok.io/hook')
                .then(response => console.log(response.data.event))
                .catch(error => console.log(error))
        
        }

            
    }
 
})
</script>

<style scoped lang = "scss">
@import "./../scss/_variables.scss";

.container{
    /* border:2px solid red; */

    margin: 10px;
    div{
        background-color: $backColor;
    }
}
.plant{
    position: relative;
    height: 460px;
    width: 280px;
    border-radius: 20px;
    border: 2px solid $backColor;
    
    svg{
        background-color: $backColor;
        /* margin-left: 15px; trinitycircle*/
    }
    h1{
        background-color: $backColor;
    }
  
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: $popupColor;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.date{
    bottom: 0;
    position: absolute;
    width: 100%;
    border-radius: 15px;
    p{
        background-color: $backColor;
        color: $lightBack;
    }
}
#firstCircle{
    margin-left: 50px;
}
.plant-header{
    width: 25px;
    height: auto;
    top: 5px;
    right: 5px;
    position: absolute;

    img{
        background-color: $backColor;
    }

}



</style>