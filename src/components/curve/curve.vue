<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { onMounted, ref, onBeforeUnmount } from "vue";
// import mesh from "./mesh.js";
// import mesh from "./mesh2.js";
// import mesh from "./mesh3.js";
// import mesh from "./mesh4.js";
import mesh from "./mesh5.js";
const dom = ref();
onMounted(() => {
  init();
});
function init() {
  const scene = new THREE.Scene();

  scene.add(mesh);

  const axesHelper = new THREE.AxesHelper(200);
  scene.add(axesHelper);

  const width = dom.value.clientWidth;
  const height = dom.value.clientHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
  camera.position.set(0, 100, 200);
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

<template>
  <div ref="dom" id="three-demo"></div>
</template>

<style scoped></style>
