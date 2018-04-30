<template>
 <div class="layout">
   <app-picture></app-picture>
   <app-controls></app-controls>
   <app-presets></app-presets>
 </div>
</template>

<script>
import Picture from "./components/Picture"
import Controls from "./components/Controls"
import Presets from "./components/Presets"

export default {
  components:{
    appPicture: Picture,
    appControls:Controls,
    appPresets: Presets
  }
}
</script>

<style lang="scss">

$color-green: #11c966;
$color-dark-grey:#1c1e22;
$color-medium-grey: #35373c;
$color-light-grey: #7e8792;

body{
  margin:0;
  padding:0;
  font-family: 'Roboto', sans-serif;
}

  .layout{
    display: grid;
    grid-template-columns: 70% 30%;
    background-color: $color-dark-grey;
    min-height: 100vh;
  }
</style>
