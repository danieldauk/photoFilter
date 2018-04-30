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
        green:0,
        blue:0,
        colorOpacity:5
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
            console.log(payload);
          state.contrast = payload.contrast
          state.brightness = payload.brightness
          state.grayscale = payload.grayscale
          state.invert = payload.invert
          state.blur = payload.blur
          state.hueRotate = payload.hueRotate
          state.opacity = payload.opacity
          state.saturate = payload.saturate            
          state.sepia = payload.sepia
        }
    },
    actions:{
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
        }
    }
});
