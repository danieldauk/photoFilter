<template>
  <button
  @click="changePreset('1977')"
  >Change Preset</button>
</template>

<script>
import Presets from "../presets.js"

export default {
  data() {
    return Presets
  },
  methods:{
      changePreset(preset){
          console.log(preset);
          console.log(this[preset]);
          this.$store.dispatch("changePreset", this[preset])
      }
  }
};
</script>

<style>

</style>
