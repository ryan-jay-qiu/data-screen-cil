import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
// import asd from "!!raw-loader!../../../public/img/direction.svg" 引入原始内容
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
