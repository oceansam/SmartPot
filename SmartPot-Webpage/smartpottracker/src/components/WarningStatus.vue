<template>

  <div class="footWarning">
      <img v-bind:class="{lowStatus: waterLevel > 50}" src = "./../assets/waterStatus.svg">
      <img v-bind:class="{lowStatus: tempLevel > 50,lowStatus: tempLevel < 80}" src="./../assets/tempStatus.svg">
      <img v-bind:class="{lowStatus: humidLevel > 50,lowStatus: humidLevel < 80}" src="./../assets/humidStatus.svg">

      <p v-if="waterLevel < 50">*Water Needed</p>
      <p v-if="tempLevel > 60">*High Temp</p>
      <p v-else-if="tempLevel < 10">*Low Temp</p>
      <p v-if="humidLevel < 50">*Low Humidity</p>
      <p v-else-if="humidLevel > 90">*High Humidity</p>
      <p v-else>Good Condition</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WarningStatus',
  props:{
    tempLevel: Number,
    waterLevel: Number,
    humidLevel: Number
  },

  
 
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../scss/_variables.scss";

    .footWarning{
        background-color: $backColor;
        img{
            margin-top: 20px;
            width: 30px;
            height: auto;
            background-color: $backColor;
        }
        p{
            font-size: 15px;
            background-color: $backColor;
        }
    }
    .lowStatus{
    opacity: 50%;
    }

</style>