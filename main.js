const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

let main_playground = document.getElementById('main_playground');

main_playground.appendChild(renderer.domElement);

// cube

const green = 0x00ff00;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: green});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;


function animate()
{
	requestAnimationFrame(animate);

	renderer.render(scene, camera);

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;
}

animate();
