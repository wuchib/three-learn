import * as THREE from 'three';

const planeGeometry = new THREE.PlaneGeometry(1000, 1000);
const planeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color('skyblue')
});

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotateX(- Math.PI / 2);
plane.position.y = -50;

const boxGeometry = new THREE.BoxGeometry(100, 100, 100);
const boxMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color('orange')
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);

const box2 = box.clone();
box2.position.x = 200;

export const mesh = new THREE.Group();
mesh.add(plane);
mesh.add(box);
mesh.add(box2);

// DirectionalLight 平行光 一般用平行光来实现太阳光
export const light = new THREE.DirectionalLight(0xffffff);
light.position.set(400, 500, 300);
light.lookAt(0, 0, 0);


const helper = new THREE.DirectionalLightHelper(light, 100)
mesh.add(helper)
