<template>
 <div class="filter-controls">
     <div class="slider">
         <div class="filter-name-value">
             <div class="filter-name">Contrast</div>
             <div class="filter-value">{{contrast}}%</div>
         </div>
         <range-slider
            min="0" max="200" :value="contrast" @input="changeContrast"
        ></range-slider>
     </div>
     <div class="slider">
         <div class="filter-name-value">
             <div class="filter-name">Brightness</div>
             <div class="filter-value">{{brightness}}%</div>
         </div>
          <range-slider
            min="0" max="200" :value="brightness" @input="changeBrightness"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="filter-name-value">
             <div class="filter-name">Grayscale</div>
             <div class="filter-value">{{grayscale}}%</div>
         </div>
            <range-slider
            min="0" max="100" :value="grayscale" @input="changeGrayscale"
            ></range-slider> 
     </div>
     <div class="slider">
         <div class="filter-name-value">
             <div class="filter-name">Invert</div>
             <div class="filter-value">{{invert}}%</div>
         </div>
            <range-slider
            min="0" max="100" :value="invert" @input="changeInvert"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="filter-name-value">
             <div class="filter-name">Blur</div>
             <div class="filter-value">{{blur/10}}px</div>
         </div>
            <range-slider
            min="0" max="100" :value="blur" @input="changeBlur"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="filter-name-value">
             <div class="filter-name">Hue Rotate</div>
             <div class="filter-value">{{hueRotate}}&deg;</div>
         </div>
            <range-slider
            min="0" max="360" :value="hueRotate" @input="changeHueRotate"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="filter-name-value">
             <div class="filter-name">Opacity</div>
             <div class="filter-value">{{opacity}}%</div>
         </div>
            <range-slider
            min="0" max="100" :value="opacity" @input="changeOpacity"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="filter-name-value">
             <div class="filter-name">Saturate</div>
             <div class="filter-value">{{saturate}}%</div>
         </div>
            <range-slider
            min="0" max="200" :value="saturate" @input="changeSaturate"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="filter-name-value">
             <div class="filter-name">Sepia</div>
             <div class="filter-value">{{sepia}}%</div>
         </div>
            <range-slider
            min="0" max="100" :value="sepia" @input="changeSepia"
            ></range-slider>
     </div> 
 </div>
</template>

<script>
import RangeSlider from "vue-range-slider";

export default {
  computed: {
    contrast() {
      return this.$store.state.contrast;
    },
    brightness() {
      return this.$store.state.brightness;
    },
    grayscale() {
      return this.$store.state.grayscale;
    },
    blur() {
      return this.$store.state.blur;
    },
    invert() {
      return this.$store.state.invert;
    },
    hueRotate() {
      return this.$store.state.hueRotate;
    },
    opacity() {
      return this.$store.state.opacity;
    },
    saturate() {
      return this.$store.state.saturate;
    },
    sepia() {
      return this.$store.state.sepia;
    }
  },
  methods: {
    changeContrast(value) {
      this.$store.dispatch("changeContrast", value);
    },
    changeBrightness(value) {
      this.$store.dispatch("changeBrightness", value);
    },
    changeGrayscale(value) {
      this.$store.dispatch("changeGrayscale", value);
    },
    changeInvert(value) {
      this.$store.dispatch("changeInvert", value);
    },
    changeBlur(value) {
      this.$store.dispatch("changeBlur", value);
    },
    changeHueRotate(value) {
      this.$store.dispatch("changeHueRotate", value);
    },
    changeOpacity(value) {
      this.$store.dispatch("changeOpacity", value);
    },
    changeSaturate(value) {
      this.$store.dispatch("changeSaturate", value);
    },
    changeSepia(value) {
      this.$store.dispatch("changeSepia", value);
    }
  },
  components: {
    RangeSlider
  }
};
</script>

<style lang="scss">
$color-green: #11c966;
$color-dark-grey: #1c1e22;
$color-medium-grey: #35373c;
$color-light-grey: #7e8792;

$slider-height: 20px;
$slider-width: 100%;
$rail-height: 2px;
$knob-size: 10px;
$rail-color: #e2e2e2;
$rail-fill-color: #11c966;
$knob-color: #11c966;
$knob-border: 1px solid #11c966;
$knob-shadow: 1px 1px rgba(0, 0, 0, 0.2);

@import "~vue-range-slider/dist/vue-range-slider.scss";

.filter-controls {
  display: grid;
  grid-template-columns: auto;
  padding: 0 20px;
  align-content: space-around;
}
.filter-name-value {
  color: $color-light-grey;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.range-slider {
  padding: 0;
}

@media(max-width: 1080px) {
  .filter-controls {
    justify-content: center;
    grid-template-columns: 50%;
    grid-auto-rows: 50px;
    margin-top: 20px;
  }

}
@media(max-width:700px) {
  .filter-controls {
    grid-template-columns: 70%;
  }
}

@media(max-width:400px) {
  .filter-controls {
    grid-template-columns: 80%;
  }
}

</style>
