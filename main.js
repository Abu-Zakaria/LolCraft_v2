import { GLTFLoader } from '../three.js/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '../three.js/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x333333);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

camera.position.set(0, 6, 10);
camera.lookAt(0, 0, 0);

const control = new OrbitControls(camera, renderer.domElement)

control.update();

renderer.setSize(window.innerWidth, window.innerHeight);

let light = new THREE.AmbientLight(0xf3f3f3);
scene.add(light);


let main_playground = document.getElementById('main_playground');

main_playground.appendChild(renderer.domElement);

const green = 0x00ff00;

//ground
let groundTexture = new THREE.TextureLoader().load('./textures/ground.png')
groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
groundTexture.repeat.set(10, 10);


let groundMaterial = new THREE.MeshStandardMaterial({map: groundTexture})

let mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry(20, 20), groundMaterial );
mesh.position.y = 0.06;
mesh.rotation.x = - Math.PI / 2;
scene.add(mesh);

let loader = new GLTFLoader();

loader.load('./textures/minecraft_grass_block/scene.gltf', (gltf) => {

	// let material = new THREE.MeshPhongMaterial();

	// let mesh = new THREE.Mesh(geometry, material);

	// mesh.position.set(0, 0, 0);
	// mesh.rotation.set(0, 0, 0);

	renderer.outputEncoding = THREE.sRGBEncoding
	

	scene.add(gltf.scene);
})

function animate()
{
	requestAnimationFrame(animate);

	control.update();

	renderer.render(scene, camera);
}

animate();


if(WEBGL.isWebGLAvailable())
{
	console.log("WebGL is available");
}
else
{
	alert("WebGL ain't available, bruh!");
}