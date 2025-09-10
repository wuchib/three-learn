<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { onMounted, ref, onBeforeUnmount } from "vue";
import mesh,{ tubePoints } from "./mesh.js";
const dom = ref();
onMounted(() => {
  init();
});
function init() {
  const scene = new THREE.Scene();

  scene.add(mesh);

  const pointLight = new THREE.PointLight(0xffffff, 200);
  pointLight.position.set(80, 80, 80);
  scene.add(pointLight);

  const width = dom.value.clientWidth;
  const height = dom.value.clientHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
  camera.position.set(200, 200, 200);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  let i = 0
  function render() {
    renderer.render(scene, camera);
    if(i < tubePoints.length - 1){
      camera.position.copy(tubePoints[i])
      camera.lookAt(tubePoints[i+1])
      i++
    }else{
      i = 0
    }
    window._RAF = requestAnimationFrame(render);
  }

  render();

  dom.value.append(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
}
// document.addEventListener('keydown', (e) => {
//     if(e.code === 'ArrowDown') {
//         i += 10;
//     }
// })
</script>

<template>
  <div ref="dom" id="three-demo"></div>
</template>

<style scoped></style>
