<template>
 <div class="layout">
   <app-picture></app-picture>
   <div class="menu-container">
      <app-menu></app-menu>
      <transition
      mode="out-in"
      name="menu"
    >
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
      
    </transition>
   
   </div>
   
   <!--<app-presets></app-presets>-->
 </div>
</template>

<script>
import Picture from "./components/Picture";
import filterControls from "./components/filterControls";
import overlayControls from "./components/overlayControls";
import presetsControls from "./components/presetsControls";
import imagesControls from "./components/imagesControls";
import Menu from "./components/menu";

export default {
  computed: {
    currentComponent() {
      return this.$store.state.menu;
    }
  },
  components: {
    appPicture: Picture,
    appFilterControls: filterControls,
    appOverlayControls: overlayControls,
    appPresetsControls: presetsControls,
    appImagesControls: imagesControls,
    appMenu: Menu
  }
};
</script>

<style lang="scss">
$color-green: #11c966;
$color-dark-grey: #1c1e22;
$color-medium-grey: #35373c;
$color-light-grey: #7e8792;
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $color-medium-grey;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $color-green;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

.layout {
  display: grid;
  grid-template-columns: auto 30vw;
  background-color: $color-dark-grey;
  min-height: 100vh;
  overflow: hidden;
}

.menu-container {
  display: grid;
  grid-template-rows: 30px auto;
  border-left: 1px solid $color-light-grey;
}

.menu-enter {
  transform: translateX(130%);
}

.menu-enter-active {
  transition: 0.5s;
}

.menu-leave {
}

.menu-leave-active {
  transform: translateX(130%);
  transition: 0.5s;
}

@media (max-width: 1080px) {
  .layout {
    grid-template-columns: auto;
  }
  .menu-container {
    border-left: none;
  }
}
</style>
