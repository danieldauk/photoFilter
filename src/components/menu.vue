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
  </div>
</template>

<script>
export default {
    data(){
        return{
            filterButton:{'active-menu':true},
            overlayButton:{'active-menu':false}
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
          } else{
              this.filterButton = {'active-menu': false}
              this.overlayButton = {'active-menu': true}
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
    background-color:rgba($color-light-grey, 0.1);
}

button{
    background: none;
    box-sizing: border-box;
    border: 1px solid $color-light-grey;
    padding: 5px 20px;
    color: $color-light-grey;
    cursor: pointer;
    flex: 1;
    outline: none;
    border-left:none;

    &:hover{
        background-color:rgba($color-light-grey, 0.1);
    }
}


</style>
