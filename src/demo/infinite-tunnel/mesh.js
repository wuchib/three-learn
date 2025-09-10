import * as THREE from "three";

const geometry = new THREE.CylinderGeometry(30, 50, 1000, 32, 32, true);
const loader = new THREE.TextureLoader();
const texture = loader.load('./storm.png');
texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapT = THREE.RepeatWrapping
texture.repeat.set(1,2)

const material = new THREE.MeshBasicMaterial({
//   map: texture,
//   color: "orange",
//   side: THREE.DoubleSide, // 双面可见
  side: THREE.BackSide, // 单面可见
  transparent: true,
  alphaMap: texture
});

const tunnel = new THREE.Mesh(geometry, material);

export default tunnel;
