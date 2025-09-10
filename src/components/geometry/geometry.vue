<template>
  <div ref="dom" id="three-demo"></div>
</template>

<script setup>
// 透视相机的视椎体学习
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { onBeforeUnmount, onMounted, ref } from "vue";

// import mesh from "./mesh.js";
// import mesh from "./mesh2.js";
import mesh from "./mesh3.js";
const dom = ref();
onMounted(() => {
  init();
});

function init() {
  const scene = new THREE.Scene();
  scene.add(mesh);

  const directionLight = new THREE.DirectionalLight(0xffffff);
  directionLight.position.set(100, 100, 100);
  scene.add(directionLight);

  const ambientLight = new THREE.AmbientLight();
  scene.add(ambientLight);

  const axesHelper = new THREE.AxesHelper(200);
  scene.add(axesHelper);

  const width = dom.value.clientWidth;
  const height = dom.value.clientHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
  camera.position.set(200, 200, 200);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  render();

  dom.value.append(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
}
</script>
