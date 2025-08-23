<template>
  <div ref="dom" id="three-demo"></div>
</template>

<script setup>
// 透视相机的视椎体学习
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { onBeforeUnmount, onMounted, ref } from "vue";
// import mesh from './mesh4.js';
// import mesh from './mesh5.js';
import mesh from './mesh6.js';
const dom = ref();
onMounted(() => {
  init();
});

function init() {
  const scene = new THREE.Scene();

  scene.add(mesh);

  const pointLight = new THREE.PointLight(0xffffff, 10000);
  pointLight.position.set(80, 80, 80);
  scene.add(pointLight);

  const axesHelper = new THREE.AxesHelper(200);
  scene.add(axesHelper);

  const width = dom.value.clientWidth;
  const height = dom.value.clientHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
  camera.position.set(200, 200, 200);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  function render() {
    renderer.render(scene, camera);
    window._RAF = requestAnimationFrame(render);
  }

  render();

  dom.value.append(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
}


</script>
