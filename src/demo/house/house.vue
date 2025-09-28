<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import house from "./house.js";
import grass from "./grass.js";
import { onMounted, ref } from "vue";
import { gui } from "./roof.js";
const dom = ref();
onMounted(() => {
  init();
});

function init() {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xcccccc, 1000, 40000);

  //   const fogControl = gui.addFolder("雾");
  //   fogControl.add(scene.fog, "near").step(100);
  //   fogControl.add(scene.fog, "far").step(1000);

  scene.add(house);
  scene.add(grass);

  const directionLight = new THREE.DirectionalLight(0xffffff);
  directionLight.position.set(3000, 3000, 3000);
  scene.add(directionLight);

  const ambientLight = new THREE.AmbientLight();
  scene.add(ambientLight);

  const axesHelper = new THREE.AxesHelper(20000);
  scene.add(axesHelper);

  const width = dom.value.clientWidth;
  const height = dom.value.clientHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
  camera.position.set(3000, 3000, 3000);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    logarithmicDepthBuffer: true, // 这个选项是开启深度缓冲区，专门用来解决深度冲突的问题。
  });
  renderer.setClearColor(new THREE.Color("skyblue"));
  renderer.setSize(width, height);

  let angle = 0;
  let r = 5000;
  function render() {
    angle += 0.01;
    if (angle >= Math.PI * 2) {
      angle -= Math.PI * 2;

      r = 5000 + Math.random() * 10000;

      camera.position.y = 1000 + Math.random() * 10000;
    }

    camera.position.x = r * Math.cos(angle);
    camera.position.z = r * Math.sin(angle);

    camera.lookAt(0, 0, 0);

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
