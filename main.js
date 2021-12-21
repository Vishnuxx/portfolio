import { OrbitControls } from "https://cdn.skypack.dev/three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "./js/three.module.js";

//connect to DOM Element
const canvas = document.querySelector(".webgl");

//create scene
const scene = new THREE.Scene();

//gui
//const gui = new dat.GUI({width: 400, closed: true})

//parameters for galaxy
const parameters = {
  count: 50000,
  size: 0.011,
  radius: 5,
  branches: 4,
  spin: 1,
  randomness: 0.5,
  randomnessPower: 2,
  insideColor: 0xff6030,
  outsideColor: 0x1b3984,
};

let geometry = null;
let material = null;
let points = null;

//generate galaxy function
const galaxyGen = () => {
  //dispose old galaxy
  if (points !== null) {
    geometry.dispose();
    material.dispose();
    scene.remove(points);
  }
  //geometry
  geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(parameters.count * 3);
  const colors = new Float32Array(parameters.count * 3);
  const colorInside = new THREE.Color(parameters.insideColor);
  const colorOutside = new THREE.Color(parameters.outsideColor);

  for (let i = 0; i <= parameters.count; i++) {
    const i3 = i * 3;
    const radius = Math.random() * parameters.radius;
    const spinAngle = radius * parameters.spin;
    const branchAngle =
      ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

    const randomX =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomY =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;

    positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

    //colors
    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, radius / parameters.radius);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  material = new THREE.PointsMaterial({
    size: parameters.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });
  points = new THREE.Points(geometry, material);
  scene.add(points);
};



const obj = new THREE.Mesh(new THREE.SphereGeometry(0.1) , new THREE.MeshBasicMaterial({color:"#000"}));
scene.add(obj)

galaxyGen();

//gui controls
// gui.add(parameters, 'count').min(100).max(1000000).step(100).onFinishChange(galaxyGen)
// gui.add(parameters, 'size').min(0.001).max(0.1).step(0.001).onFinishChange(galaxyGen)
// gui.add(parameters, 'radius').min(1).max(5).step(0.01).onFinishChange(galaxyGen)
// gui.add(parameters, 'branches').min(2).max(20).step(1).onFinishChange(galaxyGen)
// gui.add(parameters, 'spin').min(-5).max(5).step(0.001).onFinishChange(galaxyGen)
// gui.add(parameters, 'randomness').min(0).max(2).step(0.001).onFinishChange(galaxyGen)
// gui.addColor(parameters, 'insideColor').onFinishChange(galaxyGen).onFinishChange(galaxyGen)
// gui.addColor(parameters, 'outsideColor').onFinishChange(galaxyGen)

//create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 6;
camera.position.y = 6;
scene.add(camera);

//orbit controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
//controls.autoRotate = true;
controls.dampingFactor = 0.001;
controls.rotateSpeed = 0.001;
controls.enabled = false;

//controls.autoForward = true;

//create renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

//add event listener for resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});





//updater function
const updater = () => {

    camera.position.x += 0.001;
    camera.position.z -=  0.001;
    camera.position.y = Math.sin(camera.position.x )
    
    //camera.position.z = Math.abs(camera.position.x);
  controls.update(1);
  renderer.render(scene, camera);
  window.requestAnimationFrame(updater);
};

updater();
