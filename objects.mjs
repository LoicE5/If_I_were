import config from "./config.mjs";

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(
    ...Object.values(config.perspectiveCameraSettings)
);
export const renderer = new THREE.WebGLRenderer({ alpha: true });
export const futuraFont = config.futuraFontPath

/* Syntaxe de la variable "check" :
check = [Main_title,Scene1,Scene2,Scene3,etc]; → Utilité : log les intéractions avec la caméra pour la bloquer uniquement une fois par scène
↳ Utile pour la fonction stopScroll(). */
export let check = [true, ...Array(8).fill(false)];

