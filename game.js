// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a basic block texture (you can use an image for more details)
const textureLoader = new THREE.TextureLoader();
const blockTexture = textureLoader.load('https://example.com/block_texture.png'); // Replace with your texture URL

// Create the ground with block-like cubes
const blockSize = 1;
const blocks = [];  // Array to hold all blocks in the game

// Function to create a single block
function createBlock(x, y, z) {
  const geometry = new THREE.BoxGeometry(blockSize, blockSize, blockSize);
  const material = new THREE.MeshBasicMaterial({ map: blockTexture });
  const block = new THREE.Mesh(geometry, material);
  block.position.set(x, y, z);
  scene.add(block);
  blocks.push(block);
}

// Create a 10x10 grid of blocks (like Minecraft terrain)
for (let x = -5; x < 5; x++) {
  for (let z = -5; z < 5; z++) {
    createBlock(x, 0, z);
  }
}

// Position the camera above the scene
camera.position.set(0, 5, 10);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Render loop to animate the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
