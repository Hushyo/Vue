

import { createApp } from 'vue'
import App from './index.vue'
import router from './router.js'
import 'p5-ui/dist/style.css'
import P5UI from 'p5-ui'

const app=createApp(App);
app.use(router)
app.use(P5UI)
app.mount("#app");



