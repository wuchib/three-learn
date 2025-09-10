<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { onMounted, ref, onBeforeUnmount } from "vue";
import mesh from "./mesh.js";
const dom = ref();
onMounted(() => {
  init();
});
function init() {
  const scene = new THREE.Scene();

  scene.add(mesh);

  const width = dom.value.clientWidth;
  const height = dom.value.clientHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
  //   camera.position.set(300, 300, 300);
  camera.position.set(0.9, -520, 6.5);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  let H = 0;
  const clock = new THREE.Clock();
  function render() {
    // 运动方法1：材质持续位移
    // mesh.material.map.offset.y += 0.005;

    // 运动方法1优化：用 clock.getDelta 来拿到每次渲染的时间间隔，用它作为改变的数值。并且调节颜色
    const delta = clock.getDelta();

    H += 0.002;
    if (H > 1) H = 0
    mesh.material.color.setHSL(H, 0.5, 0.5);// hsl 就是色相、饱和度、亮度
    mesh.material.alphaMap.offset.y += delta * 0.5;
    mesh.rotation.y += delta * 0.5;

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
