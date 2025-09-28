import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(100, 100, 100);
const geometry1 = new THREE.BoxGeometry(200, 200, 100);
const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color('orange')
});
const material1 = new THREE.MeshLambertMaterial({
    color: new THREE.Color('orange')
});

const mesh = new THREE.Mesh(geometry, material);
export const mesh1 = new THREE.Mesh(geometry1, material1);
mesh1.name = 'cube'

export default mesh;
