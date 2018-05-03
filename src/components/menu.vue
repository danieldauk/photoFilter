<template>
  <div class="menu">
      <button 
      :class="filterButton"
      @click="changeMenu('app-filter-controls')"
      >Filters</button>
      <button
      :class="overlayButton"
      @click="changeMenu('app-overlay-controls')"
      >Overlay</button>
      <button
      :class="presetsButton"
        @click="changeMenu('app-presets-controls')"
        >Presets
        </button>
        <button
      :class="imagesButton"
        @click="changeMenu('app-images-controls')"
        >Images
        </button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            filterButton:{'active-menu':true},
            overlayButton:{'active-menu':false},
            presetsButton:{'active-menu':false},
            imagesButton:{'active-menu':false}
        }
    },
  methods: {
    changeMenu(menu) {
      this.$store.dispatch("changeMenu", menu);
    }
  },
  computed:{
      activeMenu(){
          return this.$store.state.menu;
      }
  },
  watch:{
      activeMenu: function(){
          if(this.activeMenu==="app-filter-controls"){
              this.filterButton = {'active-menu': true}
              this.overlayButton = {'active-menu': false}
              this.presetsButton = {'active-menu': false}
              this.imagesButton = {'active-menu': false}
          } else if(this.activeMenu==="app-overlay-controls"){
              this.filterButton = {'active-menu': false}
              this.overlayButton = {'active-menu': true}
              this.presetsButton = {'active-menu': false}
              this.imagesButton = {'active-menu': false}
          } else if(this.activeMenu==="app-presets-controls"){
              this.filterButton = {'active-menu': false}
              this.overlayButton = {'active-menu': false}
              this.presetsButton = {'active-menu': true}
              this.imagesButton = {'active-menu': false}
          } else{
              this.filterButton = {'active-menu': false}
              this.overlayButton = {'active-menu': false}
              this.presetsButton = {'active-menu': false}
              this.imagesButton = {'active-menu': true}
          }
      }
  }
};
</script>

<style lang="scss">
$color-green: #11c966;
$color-dark-grey:#1c1e22;
$color-medium-grey: #35373c;
$color-light-grey: #7e8792;

.menu{
    display: flex;
}

.active-menu{
    border-bottom: none;
    &:hover{
        background: none;
    }
}

button{
    background: none;
    box-sizing: border-box;
    border: 1px solid $color-light-grey;
    padding: 5px 20px;
    color: $color-light-grey;
    cursor: pointer;
    flex-grow: 1;
    outline: none;
    border-left:none;

    &:hover{
        background-color:rgba($color-light-grey, 0.1);
    }

    &:first-child{
        border-left:1px solid $color-light-grey;
    }
}

@media (max-width: 1080px) {
    button{
        padding: 0;
        height:40px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    
}
</style>
