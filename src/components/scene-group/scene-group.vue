<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import mesh, { mesh1 } from "./mesh.js";
import { onMounted, ref } from "vue";
const dom = ref();
onMounted(() => {
  init();
});

function init() {
  const scene = new THREE.Scene();
  //   mesh.position.x = 200;
  //   mesh.translateZ(200);

  const group = new THREE.Group();
  group.add(mesh);
  group.add(mesh1);
  group.position.x = 200;
  group.translateZ(200);
  mesh.position.x = 200;

  const pos = new THREE.Vector3();
  mesh.getWorldPosition(pos); // 世界坐标 group + mesh 的 posi 之和
  const axesHelper2 = new THREE.AxesHelper(200);
  group.add(axesHelper2);
  console.log(pos);
  console.log(group.position);
  console.log(mesh.position);

  scene.add(group);

  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(3000, 2000, 1000);
  scene.add(light);

  const axesHelper = new THREE.AxesHelper(1000);
  scene.add(axesHelper);

  scene.traverse((obj) => {
    console.log(obj);

    // 那遍历 Scene 中的所有对象
    if (obj.isGroup) {
      // 根据类别来查找 isGroup isMesh 等等
      //   console.log(obj, "group");
    }
    if (obj.name === "cube") {
      // 根据名称来查
      //   console.log(obj, "group");
      // obj.material.color = new THREE.Color('blue');
    }
  });
  //   getObjectByName 根据名称查找场景中的对象
  const cube = scene.getObjectByName("cube");
  cube.material.color = new THREE.Color("blue");

  //   getObjectById 根据id查找场景中的对象
  //   const cube1 = scene.getObjectById(98);
  //   cube1.material.color = new THREE.Color("pink");

  const width = dom.value.clientWidth;
  const height = dom.value.clientHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
  camera.position.set(500, 500, 500);
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
