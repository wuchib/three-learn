import { createMemoryHistory, createRouter, createWebHashHistory } from "vue-router";

import base from "../components/base.vue";
import perspective from "../components/perspective-camera.vue";
import geometry from "../components/buffer-geometry/buffer-geometry.vue";
import mesh from "../components/mesh/mesh.vue";
import mountain from "../demo/mountain-terrain/mountain-terrain.vue";

import material from "../components/material-color-texture/material-color-texture.vue";
import uv from "../components/texture-uv/texture-uv.vue";
import curve from "../components/curve/curve.vue";
import figure from "../demo/cloudscape-figure/cloudscape-figure.vue";

import generateGeometry from "../components/geometry/geometry.vue";
import tube from "../demo/tube-travel/tube-travel.vue";
import infiniteTunnel from "../demo/infinite-tunnel/infinite-tunnel.vue";

export const routes = [
  { path: "/", redirect: "/material-color-texture" },
  { path: "/base", component: base },
  { path: "/perspective", component: perspective },
  { path: "/buffer-geometry", component: geometry },
  { path: "/point-line-mesh", component: mesh },
  { path: "/mountain-terrain", component: mountain, isDemo: true },
  { path: "/material-color-texture", component: material },
  { path: "/texture-uv", component: uv },
  { path: "/curve", component: curve },
  { path: "/cloudscape-figure", component: figure, isDemo: true },
  { path: "/generate-geometry", component: generateGeometry},
  { path: "/tube-travel", component: tube, isDemo: true },
  { path: "/infinite-tunnel", component: infiniteTunnel, isDemo: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


// 全局前置守卫
router.beforeEach((to, from, next) => {
  window.removeRAF()
  next()
})
export default router;
