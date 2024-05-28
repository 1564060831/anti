import { createRouter, RouteRecordRaw,createWebHashHistory } from "vue-router";
import Scan from "../pages/scan.vue"
const routes: Array<RouteRecordRaw> = [
    { path: "/", component: Scan },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});