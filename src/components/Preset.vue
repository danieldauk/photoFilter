
<template>
 <div class="preset-container">
     <div>{{preset.name}}</div>
     <div 
     class="preset-image-container">
     <div
     :style="[{'mix-blend-mode': computedMode},{background:background}]"
     class="preset-image-container-overlay"></div>
         <img 
     class="preset-image"
     :style="{filter:allFilters}"
     src="https://placeimg.com/2400/1600/any">
     </div>
     
 </div>
</template>

<script>
export default {
  props: ["preset"],
  computed: {
    computedMode() {
      return this.preset.mode;
    },
    contrast() {
      return "contrast" + "(" + this.preset.contrast + "%)";
    },
    brightness() {
      return "brightness" + "(" + this.preset.brightness + "%)";
    },
    grayscale() {
      return "grayscale" + "(" + this.preset.grayscale + "%)";
    },
    invert() {
      return "invert" + "(" + this.preset.invert + "%)";
    },
    blur() {
      return "blur" + "(" + this.preset.blur / 10 + "px)";
    },
    hue() {
      return "hue-rotate" + "(" + this.preset.hueRotate + "deg)";
    },
    opacity() {
      return "opacity" + "(" + this.preset.opacity + "%)";
    },
    saturate() {
      return "saturate" + "(" + this.preset.saturate + "%)";
    },
    sepia() {
      return "sepia" + "(" + this.preset.sepia + "%)";
    },
    background() {
      return (
        "rgba(" +
        this.preset.red +
        "," +
        this.preset.green +
        "," +
        this.preset.blue +
        "," +
        this.preset.colorOpacity / 10 +
        ")"
      );
    },
    allFilters() {
      return (
        this.contrast +
        " " +
        this.brightness +
        " " +
        this.grayscale +
        " " +
        this.invert +
        " " +
        this.blur +
        " " +
        this.hue +
        " " +
        this.saturate +
        " " +
        this.sepia +
        " " +
        this.opacity
      );
    }
  }
};
</script>

<style lang="scss">
$color-green: #11c966;
$color-dark-grey:#1c1e22;
$color-medium-grey: #35373c;
$color-light-grey: #7e8792;

.preset-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  color: $color-light-grey;
  font-weight: 300;
}

.preset-image {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
.preset-image-container {
  position: relative;
  display: inline-block;
  max-width: 90%;
}

.preset-image-container-overlay {
  z-index: 10;
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
</style>


/*
import Presets from "../presets.js"
export default {
    data() { 
    return {
        presets: Presets,

    }
  },
  computed:{
    computedMode(){
        return this.$store.state.mode;
    },
     getContrast(state){
            return "contrast"+ "(" + preset.contrast + "%)";
        },
        getBrightness(state){
            return "brightness"+ "(" + state.brightness + "%)";
        },
        getGrayscale(state){
            return "grayscale"+ "(" + state.grayscale + "%)";
        },
        getInvert(state){
            return "invert"+ "(" + state.invert + "%)";
        },
        getBlur(state){
            return "blur"+ "(" + state.blur/10 + "px)";
        },
        getHueRotate(state){
            return "hue-rotate"+ "(" + state.hueRotate + "deg)";
        },
        getOpacity(state){
            return "opacity"+ "(" + state.opacity + "%)";
        },
        getSaturate(state){
            return "saturate"+ "(" + state.saturate + "%)";
        },
        getSepia(state){
            return "sepia"+ "(" + state.sepia + "%)";
        },
        getBackground(state){
            return "rgba("+state.red+","+state.green+","+state.blue+","+state.colorOpacity/10+")"
        },
      allFilters(){
          return this.contrast  + " " +
          this.brightness  + " " +
          this.grayscale  + " " +
          this.invert + " " +
          this.blur + " " +
          this.hue + " " +
          this.saturate + " " +
          this.sepia + " " +
          this.opacity;
          
      }
  },
  methods:{
      changePreset(preset){
          this.$store.dispatch("changePreset", this[preset])
      }
  }
} */