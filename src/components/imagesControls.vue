<template>
<div class="images-controls-container">
<button
  class="load-images-button"
  @click="loadImages()"
  >Load images</button>
  <div class="images-container">
      <div 
v-if="spinner"
class="lds-ripple" style="margin-top: 10px;"><div></div><div></div></div>
    
      <div 
      v-show="!spinner"
      class="loaded-image-container"
            @click="changeSource(image.urls.regular)"
            v-for="image in computedArray">
        <img 
        @load="showSpinner"
        
        class="loaded-image"
        :src="image.urls.thumb">
        
      </div>
       </div>  

  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      imagesArray: []
    };
  },
  computed: {
    computedArray() {
      return this.imagesArray;
    },
    spinner() {
      return this.$store.state.spinnerImages;
    }
  },
  methods: {
    loadImages() {
      this.$store.dispatch("changeSpinnerImages", true);
      this.$http
        .get(
          "https://api.unsplash.com/photos/random/?client_id=c4cb4c305457e124e8bf0739c387554aa7365a76ca1535b29dbc25c677194b70&orientation=landscape&count=18"
        )
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          this.imagesArray = [];
          for (var image in data) {
            this.imagesArray.push(data[image]);
          }
        });
    },
    changeSource(source) {
      this.$store.dispatch("changeSource", source);
      this.$store.dispatch("changeSpinner", true);
    },
    showSpinner() {
      this.$store.dispatch("changeSpinnerImages", false);
    }
  }
};
</script>


<style lang="scss">
$color-light-grey: #7e8792;

.images-controls-container {
  max-height: calc(100vh - 50px);
  overflow-y: auto;
  margin-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

.images-container {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  grid-gap: 5px;
}

.loaded-image-container {
  width: 9vw;
  height: 9vw;
  overflow: hidden;
  cursor: pointer;
}
.loaded-image {
  object-fit: cover;
}

.load-images-button {
  margin: 0 auto 10px;
  border-left: 1px solid $color-light-grey;
}

@media(max-width: 1080px){
    .images-controls{
      max-height:auto;
    }

    .images-container{
      justify-content: center;
      grid-template-columns: repeat(6,auto);
      margin:20px 0;
    }
  }

  @media(max-width: 700px){

    .images-container{
      justify-content: center;
      grid-template-columns: repeat(3,auto);
      margin:20px 0;
    }

    .loaded-image-container {
      width: 25vw;
      height: 25vw;
      }
  }

   @media(max-width: 400px){

    .images-container{
      justify-content: center;
      grid-template-columns: repeat(2,auto);
      margin:20px 0;
    }

    .loaded-image-container {
      width: 40vw;
      height: 40vw;
      }
  }
</style>
