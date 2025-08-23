<template>
  <div class="containter">
    <div class="header">
      <div class="item" :class="{ demo: item.isDemo }" v-for="item in routes" :key="item.path" @click="toView(item.path)">{{ item.path }}</div>
    </div>
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { routes } from "./router/index";
const router = useRouter();
function toView(path) {
  router.push(path);
}

window._RAF = null

window.removeRAF = () => {
  if(window._RAF === null) return
  cancelAnimationFrame(window._RAF)
  window._RAF = null
}

</script>
<style>
.containter {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.header {
  height: 56px;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background-color: #1f1f1f;
}
.main {
  flex: 1;
  overflow: auto;
}
.item{
  padding: 4px;
  background-color: bisque;
  cursor: pointer;
  border-radius: 4px;
}
.demo{
  background-color: cornflowerblue;
}
</style>
