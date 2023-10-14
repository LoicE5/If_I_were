import config from "./config.mjs"

export const scene = new THREE.Scene()
export const camera = new THREE.PerspectiveCamera(
    ...Object.values(config.perspectiveCameraSettings)
)
export const renderer = new THREE.WebGLRenderer({ alpha: true })
export const futuraFont = config.futuraFontPath

/* Syntax of the "check" variable :
check = [Main_title,Scene1,Scene2,Scene3,etc]; → Utility: log interactions with the camera to block it only once per scene.
↳ Useful for the stopScroll() function. */
export let check = [true, ...Array(8).fill(false)];

