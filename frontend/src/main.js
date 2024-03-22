import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// main.js 또는 app.js
import 'bootstrap/dist/css/bootstrap.min.css';


const appInstance = createApp(App);

appInstance.use(store);
appInstance.mount("#app");