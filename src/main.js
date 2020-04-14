import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
import '@/assets/js/directives.js';

import Print from 'vue-print-nb';

// 配置路由守卫
//beforeEach会在切换组件之前触发
router.beforeEach((to, from, next) => {
  //to指代的是当前循环出来的路由对象
  if (to.meta.requireAuth) {
    //根据token来决定是否能看到管理系统
    // token(localStorage.getItem('token')).then((res) => {
      // if (res.data == 'ok') {
        //用户已登录
        next()  //放行
      // } else next('/') //跳转到登录页面!
    // })
  } else {
    //没有开启路由验证
    next()  //放行 让他跳转
  }
})



Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);
Vue.use(Print);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

