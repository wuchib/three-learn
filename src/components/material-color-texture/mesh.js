import * as THREE from 'three';

const boxGeometry = new THREE.BoxGeometry(100, 100, 100);

const geometry = new THREE.EdgesGeometry(boxGeometry);

const material = new THREE.LineDashedMaterial(({ // 虚线材质
    color: new THREE.Color('orange'),
    dashSize: 1,
    gapSize: 10
}));

const line = new THREE.Line(geometry, material);
line.computeLineDistances();

console.log(line);

export default line;
