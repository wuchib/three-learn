import * as THREE from "three";

const loader = new THREE.TextureLoader();
// const texture = loader.load("./girl.png");
const texture = loader.load("./1.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(3, 3);
texture.colorSpace = THREE.SRGBColorSpace; // 改变颜色空间，使得贴图材质与真实图片色彩一致

const geometry = new THREE.PlaneGeometry(1536, 960);

const material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide, //两面可见
  aoMap: texture,
});

const mesh = new THREE.Mesh(geometry, material);
export default mesh;
