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
import $ from 'jquery'

//引入图标

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

