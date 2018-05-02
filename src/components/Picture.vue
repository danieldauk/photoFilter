<template>
 <div class="image-component">
     <div 
     class="image-container">
     <div
     :style="[{'mix-blend-mode': computedMode},{background:computedBackground}]"
     class="image-container-overlay"></div>
         <img 
         v-show="!spinner"
    @load="showSpinner"
     class="image"
     :style="{filter:allFilters}"
     :src="computedSource">
<div 
v-show="spinner"
class="lds-ripple"><div></div><div></div></div>
     </div>
     
 </div>
</template>

<script>
export default {
  computed: {
    spinner() {
      return this.$store.state.spinnerMain;
    },
    computedSource() {
      return this.$store.state.source;
    },
    computedMode() {
      return this.$store.state.mode;
    },
    computedBackground() {
      return this.$store.getters.getBackground;
    },
    contrast() {
      return this.$store.getters.getContrast;
    },
    brightness() {
      return this.$store.getters.getBrightness;
    },
    grayscale() {
      return this.$store.getters.getGrayscale;
    },
    invert() {
      return this.$store.getters.getInvert;
    },
    sepia() {
      return this.$store.getters.getSepia;
    },
    blur() {
      return this.$store.getters.getBlur;
    },
    saturate() {
      return this.$store.getters.getSaturate;
    },
    hue() {
      return this.$store.getters.getHueRotate;
    },
    opacity() {
      return this.$store.getters.getOpacity;
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
  },
  methods: {
    showSpinner() {
      this.$store.dispatch("changeSpinner", false);
    }
  }
};
</script>

<style lang="scss">

$color-green: #11c966;

.image-component {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
.image-container {
  position: relative;
  display: inline-block;
  max-width: 90%;
  max-height: 90vh;
  overflow: hidden;
}

.image-container-overlay {
  z-index: 10;
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid $color-green;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
