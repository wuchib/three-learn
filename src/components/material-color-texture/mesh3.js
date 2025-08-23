import * as THREE from 'three';

const loader = new THREE.TextureLoader();
const texture = loader.load('./diqiu.jpg');

const geometry = new THREE.SphereGeometry(100);

const material = new THREE.MeshBasicMaterial({
    map: texture,
    color: new THREE.Color('white'),
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
