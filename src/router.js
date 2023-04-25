import { createRouter, createWebHashHistory } from "vue-router";
import vMainWrapper from "./components/vMainWrapper.vue";
export default createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/", component: vMainWrapper }],
});
