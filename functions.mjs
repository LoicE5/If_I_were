import { scene, camera, renderer, check } from './objects.mjs';
import config from './config.mjs'

const musicPlayer = document.getElementById('music-player')
const infoElements = document.getElementById('info')
const rotatePromt = document.getElementById('please-rotate')
const ratioAdjustmentValue = 1.026

export function auto() {
    let ratio = window.innerWidth/window.innerHeight;
    return camera.position.z*ratio/ratioAdjustmentValue
}

export function freeScroll(e){
    const delta = e.deltaY;

    let sceneNum = 1
    for (const pos of config.scenePositions) {
        stopScroll(pos,sceneNum++,1000);
    }

    if(camera.position.z != config.defaultCameraPosition.z){
        infoElements.style.visibility = 'hidden';
        infoElements.style.opacity = 0;
    }

    if(camera.position.z >= config.maxCameraDepht){
        camera.position.z = config.maxCameraDepht
    }

    if(camera.position.z <= config.minCameraDepht){
        camera.position.z = config.minCameraDepht
    }

    /* Pour l'apparition du lecteur audio pour Shoot to Thrill */
    if (
        camera.position.z <= config.musicPlayerDephtInterval[0] &&
        camera.position.z >= config.musicPlayerDephtInterval[1]
    ) {
        musicPlayer.style.visibility = 'visible';
        musicPlayer.style.opacity = 1;
    } else {
        musicPlayer.style.opacity = 0;
        musicPlayer.style.visibility = 'hidden';
    }

    /* Scroll Normal */
    if(delta > 1){
        camera.position.z += config.cameraDephtStep;
    } else {
        camera.position.z -= config.cameraDephtStep; 
    } 
    render();
}

export function stopScroll(camPosZ,sceneNo,delay){
    if(camera.position.z == camPosZ && check[sceneNo] == false){
        window.removeEventListener('wheel', freeScroll);
        setTimeout(function(){
            window.addEventListener('wheel',freeScroll)
        },delay);
        check[sceneNo] = true;
    }
}

export function addImage(path,width,height,scale,X,Y,Z){
    const finalWidth = width*scale;
    const finalHeight = height*scale;
    let img = new THREE.MeshBasicMaterial({
        map:THREE.ImageUtils.loadTexture(path)
    });
    img.map.needsUpdate = true;
    let plane = new THREE.Mesh(new THREE.PlaneGeometry(finalWidth, finalHeight),img);
    plane.overdraw = true;
    plane.position.x = X;
    plane.position.y = Y;
    plane.position.z = Z;
    scene.add(plane);
    render();
}

export function addText(fontFamily,color,X,Y,Z,fontSize,message){
    let loader = new THREE.FontLoader();
	loader.load(fontFamily, function(font) {
		let xMid, text;

		let matLite = new THREE.MeshBasicMaterial({
			color: color,
			side: THREE.DoubleSide
		});

		let shapes = font.generateShapes(message, fontSize);

		let geometry = new THREE.ShapeBufferGeometry(shapes);

		geometry.computeBoundingBox();

		xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

		geometry.translate(xMid, 0, 0);

        text = new THREE.Mesh(geometry, matLite);
        
        text.position.x = X;
        text.position.y = Y;
		text.position.z = Z;
        scene.add(text);
        
		let holeShapes = [];

		for (let i = 0; i < shapes.length; i++) {
			let shape = shapes[i];

			if (shape.holes && shape.holes.length > 0) {
				for (let j = 0; j < shape.holes.length; j++) {
					let hole = shape.holes[j];
					holeShapes.push(hole);
				}
			}
		}

        shapes.push.apply(shapes, holeShapes);
        render();
    });
}

export function render(){
    renderer.render(scene, camera);
}

export function particles(amount){

    for(let i=0;i<amount;i++){
        let geometry = new THREE.CircleGeometry( 2, 20 );
        let material = new THREE.MeshBasicMaterial( { color: 0xfffff0 } );
        let molecul = new THREE.Mesh( geometry, material );
        molecul.position.x=randomInt(-window.innerWidth,window.innerWidth);
        molecul.position.y=randomInt(-window.innerHeight,window.innerHeight);
        molecul.position.z=randomInt(config.particlesNumber.min,config.particlesNumber.max);
        scene.add(molecul);
    }
}

export function randomInt(min,max){
	return Math.floor((Math.random() * (max+1-min)) + min);
}

export function moveZCamTo(Zpos){
    camera.position.z = Zpos;
    /*⬇ Condition permettant de cacher les informations d'utilisation du site ⬇*/
    if(Zpos != config.defaultCameraPosition.z){
        infoElements.style.visibility = 'hidden';
        infoElements.style.opacity = 0;
    }
    /*⬇ Condition pour le lecteur de musique ⬇*/
    if(Zpos == config.scenePositions[6]){
        musicPlayer.style.visibility = 'visible';
        musicPlayer.style.opacity = 1;
    } else {
        musicPlayer.style.visibility = 'hidden';
        musicPlayer.style.opacity = 0;
    }
    render();
}

export function onReady(callback) {
    window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] != undefined) {
        callback.call(this);
      }
    }, 1000);
}

export const handleEvents = {
    /* Resize the renderer to fit the new aspect ratio. */
    resize() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        render();
    
        /* If the window is now in portrait, we prompt the user to set in in landscape */
        if (window.innerWidth < window.innerHeight) {
            rotatePromt.style.visibility = 'visible';
            window.removeEventListener('wheel', freeScroll);
        } else {
            rotatePromt.style.visibility = 'hidden';
            window.addEventListener('wheel', freeScroll);
        }
    },
    load() {
        musicPlayer.src = 'shoot_to_thrill.m4a';
        if (window.innerWidth < window.innerHeight) {
            rotatePromt.style.visibility = 'visible';
            window.removeEventListener('wheel', freeScroll);
        } else {
            rotatePromt.style.visibility = 'hidden';
            window.addEventListener('wheel', freeScroll);
        }
    },
    /* Permet de déplacer la caméra grâce aux flèches directionnelles du clavier */
    keydown(e) {
        const key_code = e.which || e.keyCode;
        const step = config.arrowsCameraDisplacementStep
        switch (key_code) {
            case config.keyCodes.left:
                camera.position.x -= step;
                break;
            case config.keyCodes.up:
                camera.position.y += step;
                break;
            case config.keyCodes.right:
                camera.position.x += step;
                break;
            case config.keyCodes.down:
                camera.position.y -= step;
                break;
        }
        render();
    },
    /* Permet d'orienter la caméra via un maintien du clic gauche & un glissement de la souris */
    mousedown() {
        window.onmousemove = e => {
            let mouseX = e.clientX - window.innerWidth / 2;
            let mouseY = e.clientY - window.innerHeight / 2;
            camera.position.x = (mouseX - camera.position.x) * 0.5;
            camera.position.y = (mouseY - camera.position.y) * 0.5;
            camera.lookAt(scene.position);
            render();
        }
    },
    /* Resets the mousedown event when it is no longer needed */
    mouseup() {
        window.onmousemove = e => {
            camera.lookAt(camera.position);
            render();
        }
        camera.lookAt(camera.position);
        camera.position.x = config.defaultCameraPosition.x;
        camera.position.y = config.defaultCameraPosition.y;
        render();
    },
    /* Permet un libre défilement via la molette de la souris, sur l'axe Z */
    scroll: freeScroll
}