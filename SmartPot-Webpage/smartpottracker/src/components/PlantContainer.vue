<template>
    <div>
        <div class="container">
           
            <div class="plant">
                    <div class="plant-header">
                        <img @click="createPost()" src="./../assets/refresh.svg" alt ="refreshButton">
                    </div>
        
                    <h1>{{plantData.name}}</h1> 

                        <svg class="waterLevel" height= '80' width= '80' >
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

                        <svg class="tempLevel" height= "80" width= "80">
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

                        <div class="footWarning">
                            <img v-bind:class="{lowStatus: waterLevel > 50}" src = "./../assets/waterStatus.svg">
                            <img v-bind:class="{lowStatus: tempLevel < 50,lowStatus: tempLevel > 80}" src="./../assets/tempStatus.svg">
                            <p v-if="waterLevel < 50">*Water Needed</p>
                            <p v-if="tempLevel > 60">*High Temp</p>
                            <p v-else-if="tempLevel < 10">*Low Temp</p>
                        </div>
                                          
            </div>
        </div>


    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import axios from 'axios';
export default defineComponent({
    
    name:'PlantContainer',
    data(){
        return{
            waterLevel : 99,
            tempLevel: 99
        }
    },
    props:{
        plantData: Object,

    },
    methods:{
        createPost(){
            this.waterLevel = 23;
            this.tempLevel =99
            // axios.post('url',this.waterLevel)
            // .then(response => console.log(response))
            // .then(error => console.log(error))
        }
    },
    // created(){
        
    //     axios.post('url',this.waterLevel)
    //     .then(response => console.log(response))
    //     .then(error => console.log(error))
        
    // }
})
</script>

<style scoped lang = "scss">
$backColor: #6ca076;
$lightBack:#2F3E46;
$textColor: #e7f1e1;
.container{
    /* border:2px solid red; */

    margin: 10px;
}
.plant{
    /* border: 2px solid blue; */
    position: relative;
    height: 300px;
    width: 200px;
    background-color: $backColor;
    border-radius: 20px;
    svg{
        background-color: $backColor;
    }
    h1{
        background-color: $backColor;
    }

    .footWarning{
        background-color: $backColor;
        img{
            width: 30px;
            height: auto;
            background-color: $backColor;
        }
        p{
            font-size: 15px;
            background-color: $backColor;
        }
    }
   
}
.plant-header{
    width: 25px;
    height: auto;
    top: 0px;
    right: 0px;
    background-color: $backColor;
    position: absolute;

    img{
        background-color: $backColor;
    }

}

.lowStatus{
    opacity: 50%;
}


</style>