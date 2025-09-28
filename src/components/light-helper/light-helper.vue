
<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { mesh, light } from "./mesh.js";
// import { mesh, light } from "./mesh2.js";
// import { mesh, light } from "./mesh3.js";
import { mesh, light } from "./mesh5.js";
import { onMounted, ref } from "vue";

import { GUI } from "three/addons/libs/lil-gui.module.min.js";

const dom = ref();
onMounted(() => {
  init();
});

/**
 * 
 * DirectionalLight：平行光，光线都是平行的，一般用来实现太阳光
 * PointLight：点光源，从一个点发散的光源，类似灯泡
 * AmbientLight：环境光，均匀照射所有物体的光源，用来调亮整个场景
 * SpotLight：聚光灯，比较聚拢的光源，类似手电筒的效果，可以设置 angle 和 distance
 * HemisphereLight：半球光, 要传入两个颜色，天空颜色、地面颜色，它是一种从两个方向向中间照射的效果，会有个渐变。
 * RectAreaLight 矩形平面光 不管是点光源、还是平行光，他们都不是从一个面发出的光线。比如灯管，或者窗户透过的光。(RectAreaLight 只对 MeshStandardMaterial 生效)
 */

function init() {
  const scene = new THREE.Scene();
  const gui = new GUI();
  const f1 = gui.addFolder("平行光");
  f1.add(light.position, "x").min(10).max(1000);
  f1.add(light.position, "y").min(10).max(1000);
  f1.add(light.position, "z").min(10).max(1000);
  f1.add(light, "intensity").min(0).max(10);
  scene.add(mesh, light);

  const axesHelper = new THREE.AxesHelper(1000);
  scene.add(axesHelper);

  const width = dom.value.clientWidth;
  const height = dom.value.clientHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
  camera.position.set(200, 800, 800);
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

<template>
  <div ref="dom" id="three-demo"></div>
</template>

<style scoped></style>
