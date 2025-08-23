<template>
  <div ref="dom" id="three-demo"></div>
</template>

<script setup>
// 透视相机的视椎体学习
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { onMounted, ref, onBeforeUnmount } from "vue";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
const dom = ref();
onMounted(() => {
  init();
});

function init() {
  const scene = new THREE.Scene();

  const axesHelper = new THREE.AxesHelper(200);
  //   scene.add(axesHelper);

  const width = dom.value.clientWidth;
  const height = dom.value.clientHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
  camera.position.set(200, 200, 200);
  camera.lookAt(0, 0, 0);

  const camera2 = new THREE.PerspectiveCamera(20, 16 / 9, 100, 300);
  const cameraHelper = new THREE.CameraHelper(camera2);
  scene.add(cameraHelper);

  const gui = new GUI();
  function onChange() {
    camera2.updateProjectionMatrix();
    cameraHelper.update();
  }
  gui.add(camera2, "fov", [30, 60, 10]).onChange(onChange);
  gui
    .add(camera2, "aspect", {
      "16/9": 16 / 9,
      "4/3": 4 / 3,
    })
    .onChange(onChange);
  gui.add(camera2, "near", 0, 300).onChange(onChange);
  gui.add(camera2, "far", 300, 800).onChange(onChange);

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
