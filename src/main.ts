import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/assets/base.css";
import "@progress/kendo-theme-default/dist/all.css";

const app = createApp(App);

const pinia = createPinia();

app.use(pinia).use(router);

app.mount("#app");
