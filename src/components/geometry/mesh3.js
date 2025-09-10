import * as THREE from 'three';

const pointsArr = [
    new THREE.Vector2(100, 0),
    new THREE.Vector2(50, 20),
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 50),
    new THREE.Vector2(50, 100)
];

// const shape = new THREE.Shape(pointsArr);
const shape = new THREE.Shape() // 创建平面形状
// 开始画形状
shape.moveTo(100,0)
shape.lineTo(100,100)
shape.lineTo(0,100)
shape.lineTo(0,0)

const path = new THREE.Path()
path.arc(50,50,10) // 位置 + 半径
shape.holes.push(path) // 给形状挖洞

// const geometry = new THREE.ShapeGeometry(shape);
const geometry = new THREE.ExtrudeGeometry(shape,{ depth: 100 })
const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color('lightgreen')
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
