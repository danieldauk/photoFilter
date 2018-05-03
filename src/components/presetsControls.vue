<template>
    <div class="preset-controls">
       <app-preset 
       @click.native="changePreset(preset)"
       v-for="(preset,index) in presets"
       :key="index"
       :preset="preset"
       >
       </app-preset>
    </div>
</template>

<script>
import Presets from "../presets.js";
import appPreset from "./Preset.vue";

export default {
  data() {
    return {
      presets: Presets
    };
  },
  methods: {
    changePreset(preset) {
      this.$store.dispatch("changePreset", preset);
    }
  },
  components: {
    appPreset
  }
};
</script>

<style lang="scss">
.preset-controls {
  max-height: calc(100vh - 50px);
  overflow-y: auto;
  margin-top: 10px;
  display: grid;
  grid-gap: 10px;
  padding-bottom: 10px;
}

app-preset:last-child {
  margin-bottom: 10px;
}

@media (max-width: 1080px) {
  .preset-controls {
    max-height: auto;
    justify-content: center;
    grid-template-columns: 40% 40%;
    margin-top: 40px;
  }
}

@media (max-width: 400px) {
  .preset-controls {
    grid-template-columns: 70%;
  }
}


</style>
