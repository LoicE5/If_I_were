import { render, addText, addImage, particles, onReady, handleEvents, addAccessibilityText, addNavButton } from './functions.mjs'
import { camera, renderer, futuraFont } from './objects.mjs'
import config from './config.mjs'

/* Creation of all parameters required for the THREE environment */
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

/* Setting all events handlers */
window.onresize = handleEvents.resize
window.onload = handleEvents.load
window.onkeydown = handleEvents.keydown
window.onmousedown = handleEvents.mousedown
window.onmouseup = handleEvents.mouseup
window.onscroll = handleEvents.scroll


/* Set initial camera position on Z axis */
camera.position.z = config.defaultCameraPosition.z;

/* Setting all the 3D text elements */
for (const params of config.art.text) {
    addText(futuraFont, ...Object.values(params))
    /* Adding the tags for screen readers - web accessibility purpose */
    addAccessibilityText(params.fontSize, params.content)
}

/* Setting all the 3D image elemnts */
for(const params of config.art.images) {
    addImage(...Object.values(params))
}

for (const params of config.navButtons) {
    addNavButton(params.targetZPos, params.imgPath, params.alt)
}

particles(config.particlesAmount)

onReady(function () {
    document.querySelector('.loader').style.display = 'none'
    render()
})