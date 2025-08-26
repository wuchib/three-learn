<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { onMounted, ref } from "vue";
import mesh from "./mesh.js";

const dom = ref();
onMounted(() => {
  init();
});
function init() {
  const scene = new THREE.Scene();

  scene.add(mesh);

  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(500, 300, 600);
  scene.add(light);

  const light2 = new THREE.AmbientLight();
  scene.add(light2);

  const axesHelper = new THREE.AxesHelper(1000);
  scene.add(axesHelper);

  const width = dom.value.clientWidth;
  const height = dom.value.clientHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
  camera.position.set(0, 200, 600);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(width, height);

  function render() {
    renderer.render(scene, camera);
    window._RAF = requestAnimationFrame(render);
    
    mesh.children.forEach((item, index) => {
      const flag = index % 2 === 0 ? 1 : -1;
      item.rotation.z += 0.001 * index * flag;
    });
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
