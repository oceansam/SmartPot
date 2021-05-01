<template>
    <div>
        <div class="container">
           
            <div class="plant">
                    <div class="plant-header">
                        <img src="./../assets/refresh.svg">
                    </div>
                    <h3>Rose</h3>

                    <p>Water Level:</p>
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
            waterLevel: Number,
            
        }
    },
    methods:{
        createPost(){
            axios.post('url',this.waterLevel)
            .then(response => console.log(response))
            .then(error => console.log(error))
        }
    },
    created(){
        
        axios.post('url',this.waterLevel)
        .then(response => console.log(response))
        .then(error => console.log(error))
        
    }
})
</script>

<style scoped lang = "scss">
.container{
    border:2px solid red;
    display: flex;
    justify-content: center;
    margin: 0;
}
.plant{
    border: 2px solid blue;
    position: relative;
    height: 300px;
    width: 250px
}
.plant-header{
    color: blue;
    width: 25px;
    height: auto;
    border: 2px solid black;
    top: 0px;
    right: 0px;
    
    background-color: #84A98C;

    position: absolute;
    &:hover{
        img{
            background-color: #CAD2C5;
            transition: 0.25s;
            
        }
        background-color: #CAD2C5;
        transition: 0.25s;
    }
    img{
        background-color: #84A98C;
    }
}
button{
    border: none;
    border-radius: 5px;
    width: 30px;
    height: auto;
    &:hover{
        transition: 0.25s;
    }
}
</style>