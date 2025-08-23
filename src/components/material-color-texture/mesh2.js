import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(100, 100);

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
  transparent: true, // 是否透明
  opacity: 0.1,
});

const mesh = new THREE.Mesh(geometry, material);
const color = mesh.material.color;
console.log(color.getHexString());
console.log(color.getStyle());
color.setStyle("blue");

console.log(mesh);

export default mesh;
