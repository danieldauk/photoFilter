<template>
 <div class="image-component">
     <div 
     class="image-container">
     <div
     :style="{background:computedBackground}"
     class="image-container-overlay"></div>
         <img 
     class="image"
     :style="{filter:allFilters}"
     src="https://placeimg.com/800/480/any">
     </div>
     
 </div>
</template>

<script>
export default {
  computed:{
     computedBackground(){
        return this.$store.getters.getBackground;
     },
      contrast(){
          return this.$store.getters.getContrast;
      },
      brightness(){
          return this.$store.getters.getBrightness;
      },
      grayscale(){
          return this.$store.getters.getGrayscale;
      },
      invert(){
          return this.$store.getters.getInvert;
      },
      sepia(){
        return this.$store.getters.getSepia;
      },
      blur(){
        return this.$store.getters.getBlur;
      },
      saturate(){
          return this.$store.getters.getSaturate;
      },
      hue(){
          return this.$store.getters.getHueRotate;
      },
      opacity(){
          return this.$store.getters.getOpacity;
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
  }
}
</script>

<style lang="scss">
    .image-component{
        display: flex;
        justify-content: center;
        align-items:center;
    }

    .image{
        max-width: 100%;
        max-height: 100%;
    }
    .image-container{
        position:relative;
        width: 90%;
    }

    .image-container-overlay {
        z-index:10;
        display: block;
        height:100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        mix-blend-mode: overlay;
        background: rgba(0, 0, 227, 1);
    }
</style>
