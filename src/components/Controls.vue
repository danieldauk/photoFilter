<template>
 <div class="controls">
     <div class="slider">
         <div class="name-value">
             <div class="name">Contrast</div>
             <div class="value">{{contrast}}%</div>
         </div>
         <range-slider
            min="0" max="200" :value="contrast" @input="changeContrast"
        ></range-slider>
     </div>
     <div class="slider">
         <div class="name-value">
             <div class="name">Brightness</div>
             <div class="value">{{brightness}}%</div>
         </div>
          <range-slider
            min="0" max="200" :value="brightness" @input="changeBrightness"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="name-value">
             <div class="name">Grayscale</div>
             <div class="value">{{grayscale}}%</div>
         </div>
            <range-slider
            min="0" max="100" :value="grayscale" @input="changeGrayscale"
            ></range-slider> 
     </div>
     <div class="slider">
         <div class="name-value">
             <div class="name">Invert</div>
             <div class="value">{{invert}}%</div>
         </div>
            <range-slider
            min="0" max="100" :value="invert" @input="changeInvert"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="name-value">
             <div class="name">Blur</div>
             <div class="value">{{blur}}px</div>
         </div>
            <range-slider
            min="0" max="100" :value="blur" @input="changeBlur"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="name-value">
             <div class="name">Hue Rotate</div>
             <div class="value">{{hueRotate}}&deg;</div>
         </div>
            <range-slider
            min="0" max="360" :value="hueRotate" @input="changeHueRotate"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="name-value">
             <div class="name">Opacity</div>
             <div class="value">{{opacity}}%</div>
         </div>
            <range-slider
            min="0" max="100" :value="opacity" @input="changeOpacity"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="name-value">
             <div class="name">Saturate</div>
             <div class="value">{{saturate}}%</div>
         </div>
            <range-slider
            min="0" max="200" :value="saturate" @input="changeSaturate"
            ></range-slider>
     </div>
     <div class="slider">
         <div class="name-value">
             <div class="name">Sepia</div>
             <div class="value">{{sepia}}%</div>
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
$color-dark-grey:#1c1e22;
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

.controls {
  display: grid;
  grid-template-columns: auto;
  padding: 0 20px;
  align-content: space-around;
}
.name-value{
    color:$color-light-grey;
    display:flex;
    justify-content: space-between;
    font-size: 14px;
}

.range-slider{
    padding: 0;
}

</style>
