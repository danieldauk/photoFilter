<template>
 <div class="overlay-controls"> 
     <div class="slider">
         <div class="overlay-name-value">
             <div class="overlay-name">Red</div>
             <div class="overlay-value">{{red}}</div>
         </div>
            <range-slider
            min="0" max="255" :value="red" @input="changeRed"
            ></range-slider>
     </div> 
     <div class="slider">
         <div class="overlay-name-value">
             <div class="overlay-name">Green</div>
             <div class="overlay-value">{{green}}</div>
         </div>
            <range-slider
            min="0" max="255" :value="green" @input="changeGreen"
            ></range-slider>
     </div> 
     <div class="slider">
         <div class="overlay-name-value">
             <div class="overlay-name">Blue</div>
             <div class="overlay-value">{{blue}}</div>
         </div>
            <range-slider
            min="0" max="255" :value="blue" @input="changeBlue"
            ></range-slider>
     </div> 
     <div class="slider">
         <div class="overlay-name-value">
             <div class="overlay-name">Color opacity</div>
             <div class="overlay-value">{{colorOpacity*10}}%</div>
         </div>
            <range-slider
            min="0" max="10" :value="colorOpacity" @input="changeColorOpacity"
            ></range-slider>
     </div>
     <div class="color-preview-container">
         <div 
         :style="{background:background}"
         class="color-preview"></div>
     </div>
     <div class="select-container">
         <div class="selector-name">Mix blend mode</div>
         <select 
         @change="changeMode"
         class="select-blend-mode">
             <option value="overlay">overlay</option>
             <option value="multiply">multiply</option>
             <option value="screen">screen</option>
             <option value="darken">darken</option>
             <option value="lighten">lighten</option>
             <option value="color-dodge">color dodge</option>
             <option value="color-burn">color burn</option>
             <option value="hard-light">hard light</option>
             <option value="soft-light">soft light</option>
             <option value="difference">difference</option>
             <option value="exclusion">exclusion</option>
             <option value="hue">hue</option>
             <option value="color">color</option>
             <option value="luminosity">luminosity</option>
         </select>
    </div>     
 </div>
</template>

<script>
import RangeSlider from "vue-range-slider";

export default {
  computed: {
    red() {
      return this.$store.state.red;
    },
    green() {
      return this.$store.state.green;
    },
    blue() {
      return this.$store.state.blue;
    },
    colorOpacity() {
      return this.$store.state.colorOpacity;
    },
    background(){
        return this.$store.getters.getBackground;
    }

  },
  methods: {
    changeRed(value) {
      this.$store.dispatch("changeRed", value);
    },
    changeGreen(value) {
        this.$store.dispatch("changeGreen", value);
    },
    changeBlue(value) {
        this.$store.dispatch("changeBlue", value);
    },
    changeColorOpacity(value) {
        this.$store.dispatch("changeColorOpacity", value);
    },
    changeMode(event){
        this.$store.dispatch("changeMode", event.target.value);
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

.overlay-controls {
  display: grid;
  grid-template-columns: auto;
  padding: 0 20px;
  align-content: space-around;
}
.overlay-name-value {
  color: $color-light-grey;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.range-slider {
  padding: 0;
}

.selector-name{
 color: $color-light-grey;
 font-size: 14px;
 margin-bottom: 2px;

}

.color-preview{
    height: 150px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid $color-light-grey;
}

.select-blend-mode{
    background: $color-medium-grey;
    color:$color-light-grey;
    width: 100%;
    height: 30px;
     outline: none;
}
</style>
