import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios'
import $ from 'jquery'
// Vue.prototype.$axios = axios    //把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求
// Vue.prototype.HOME = '/api'    //重要在于这里，Vue.prototype.HOME = '/api'是一个定值，默认指向localhost，所有修改指向路径为'/api'，配置文件index.js定义的可跨域路径
// // 注意 在配置后一定要更改此处 否则跨域不生效
// //引入图标

const app = createApp(App)

//图标引入
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key,component)
}



router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限

        if (localStorage.getItem('token')) { // 判断当前的token是否存在 ； 登录存入的token
            next();
        }
        else {
            console.log('需要登录');
            next({
                path: '/loginPage',
                query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
});


app.use(store)
app.use(ElementPlus)
app.use(router)
app.use($)
app.mount('#app')

