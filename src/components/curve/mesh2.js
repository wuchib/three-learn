import * as THREE from 'three';

const arr = [
    new THREE.Vector2( -100, 0 ),
	new THREE.Vector2( -50, 50 ),
	new THREE.Vector2( 0, 0 ),
	new THREE.Vector2( 50, -50 ),
	new THREE.Vector2( 100, 0 ),
	new THREE.Vector2( 100, 0 ),
];

const curve = new THREE.SplineCurve(arr); // 同一组点序列创建一个曲线实例
const pointsArr = curve.getPoints(100); // 获取曲线上的点位置，数值越大曲线越平滑

const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(pointsArr);  // 通过点数组创建曲线

const material = new THREE.LineBasicMaterial({ 
    color: new THREE.Color('red') 
});

const line = new THREE.Line( geometry, material );

const pointsMaterial = new THREE.PointsMaterial({
    color: new THREE.Color('pink'),
    size: 1
});
const points = new THREE.Points(geometry, pointsMaterial);
line.add(points);


const geometry2 = new THREE.BufferGeometry();
geometry2.setFromPoints(arr);
const material2 = new THREE.PointsMaterial({
    color: new THREE.Color('green'),
    size: 10
});
const points2 = new THREE.Points(geometry2, material2);
const line2 = new THREE.Line(geometry2, new THREE.LineBasicMaterial());
line.add(points2, line2);



const myPoints = heartPoints(20);
const myCurve = new THREE.SplineCurve(
  myPoints.map(p => new THREE.Vector2(p.x, p.y)),
);

const myGeometry = new THREE.BufferGeometry()
myGeometry.setFromPoints(myCurve.getPoints(200))

const myMaterial = new THREE.LineBasicMaterial({
    color: new THREE.Color('red')
})

const myLoveLine = new THREE.Line(myGeometry, myMaterial)


// 用极坐标方程生成心形
function heartPoints(count = 200) {
  const pts = [];
  for (let i = 0; i <= count; i++) {
    // 将角度映射到 0..2π
    const t = (i / count) * Math.PI * 2;
    // 经典心形极坐标方程（缩放 20 倍）
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);
    pts.push(new THREE.Vector2(x * 1.25, y * 1.25)); // 1.25 让整体再大一点
  }
  return pts;
}

export default myLoveLine;
