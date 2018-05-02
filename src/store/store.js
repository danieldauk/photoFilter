import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        contrast: 100, // 100 default 0 min 200 max
        brightness: 100,  //100 default 0 min 200 max
        grayscale: 0,  //0 default 0 min 100 max
        invert:0, //0 default 0 min 100 max
        blur:0,
        hueRotate: 0, //0 default 0 min 360 max
        opacity:100, //100 default 100 min 0 max
        saturate:100, //100 default 0 min 200 max
        sepia: 0, //0 default 0 min 100 max
        red: 255,
        green:255,
        blue:255,
        colorOpacity:0, //0 default
        mode: "overlay",
        menu: "app-filter-controls",
        source:"https://placeimg.com/2400/1600/any",
        spinnerMain: false,
        spinnerImages: false
    },
    getters:{
        getContrast(state){
            return "contrast"+ "(" + state.contrast + "%)";
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
        }
    },
    mutations:{
        changeContrast(state, payload){
            state.contrast = payload;
        },
        changeBrightness(state, payload){
            state.brightness = payload;
        },
        changeGrayscale(state, payload){
            state.grayscale = payload;
        },
        changeBlur(state, payload){
            state.blur = payload;
        },
        changeInvert(state, payload){
            state.invert = payload;
        },
        changeHueRotate(state, payload){
            state.hueRotate = payload;
        },
        changeOpacity(state, payload){
            state.opacity = payload;
        },
        changeSaturate(state, payload){
            state.saturate = payload;
        },
        changeSepia(state, payload){
            state.sepia = payload;
        },
        changePreset(state, payload){
          state.contrast = payload.contrast
          state.brightness = payload.brightness
          state.grayscale = payload.grayscale
          state.invert = payload.invert
          state.blur = payload.blur
          state.hueRotate = payload.hueRotate
          state.opacity = payload.opacity
          state.saturate = payload.saturate            
          state.sepia = payload.sepia
          state.red = payload.red
          state.blue = payload.blue
          state.green = payload.green
          state.colorOpacity = payload.colorOpacity
          state.mode = payload.mode
        },
        changeRed(state,payload){
            state.red = payload;
        },
        changeBlue(state,payload){
            state.blue = payload;
        },
        changeGreen(state,payload){
            state.green = payload;
        },
        changeColorOpacity(state,payload){
            state.colorOpacity = payload;
        },
        changeMenu(state,payload){
            state.menu  = payload;
        },
        changeMode(state,payload){
            state.mode = payload;
        },
        changeSource(state,payload){
            state.source = payload;
        },
        changeSpinner(state,payload){
            state.spinnerMain = payload;
        },
        changeSpinnerImages(state,payload){
            state.spinnerImages = payload;
        }
    },
    actions:{
        changeRed(context, payload){
            context.commit("changeRed", payload);
        },
        changeBlue(context, payload){
            context.commit("changeBlue", payload);
        },
        changeGreen(context, payload){
            context.commit("changeGreen", payload);
        },
        changeColorOpacity(context, payload){
            context.commit("changeColorOpacity", payload);
        },
        changeContrast(context, payload){
            context.commit("changeContrast", payload);
        },
        changeBrightness(context, payload){
            context.commit("changeBrightness", payload);
        },
        changeGrayscale(context, payload){
            context.commit("changeGrayscale", payload);
        },
        changeBlur(context, payload){
            context.commit("changeBlur", payload);
        },
        changeInvert(context, payload){
            context.commit("changeInvert", payload);
        },
        changeHueRotate(context, payload){
            context.commit("changeHueRotate", payload);
        },
        changeOpacity(context, payload){
            context.commit("changeOpacity", payload);
        },
        changeSaturate(context, payload){
            context.commit("changeSaturate", payload);
        },
        changeSepia(context, payload){
            context.commit("changeSepia", payload);
        },
        changePreset(context,payload){
            context.commit("changePreset", payload);
        },
        changeMenu(context,payload){
            context.commit("changeMenu", payload);
        },
        changeMode(context,payload){
            context.commit("changeMode", payload);
        },
        changeSource(context,payload){
            context.commit("changeSource", payload);
        },
        changeSpinner(context,payload){
            context.commit("changeSpinner", payload)
        },
        changeSpinnerImages(context,payload){
            context.commit("changeSpinnerImages", payload)
        }
    }
});
