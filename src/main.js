import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);

app.mount("#app")