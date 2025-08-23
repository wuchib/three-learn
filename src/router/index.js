import { createMemoryHistory, createRouter, createWebHashHistory } from "vue-router";

import base from "../components/base.vue";
import perspective from "../components/perspective-camera.vue";
import geometry from "../components/buffer-geometry/buffer-geometry.vue";
import mesh from "../components/mesh/mesh.vue";
import mountain from "../demo/mountain-terrain/mountain-terrain.vue";

import material from "../components/material-color-texture/material-color-texture.vue";

export const routes = [
  { path: "/", redirect: "/material-color-texture" },
  { path: "/base", component: base },
  { path: "/perspective", component: perspective },
  { path: "/buffer-geometry", component: geometry },
  { path: "/point-line-mesh", component: mesh },
  { path: "/mountain-terrain", component: mountain, isDemo: true },
  { path: "/material-color-texture", component: material },
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
