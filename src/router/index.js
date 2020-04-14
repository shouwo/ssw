import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("../views/Index.vue"),
    children: [
    	//欢迎页
    	{ path: "/index/welcome", name: "Welcome", meta: { requireAuth: true }, component: () => import("../views/pages/Welcome.vue") },
      // 用户管理
      { path: "/index/stapage", name: "Stapage", meta: { requireAuth: true }, component: () => import("../views/pages/user/Stapage.vue") },
      { path: "/index/userlist", name: "Userlist", meta: { requireAuth: true }, component: () => import("../views/pages/user/Userlist.vue") },
      { path: "/index/viplist", name: "Viplist", meta: { requireAuth: true }, component: () => import("../views/pages/user/Viplist.vue") },
      { path: "/index/cuserlist", name: "Cuserlist", meta: { requireAuth: true }, component: () => import("../views/pages/user/Cuserlist.vue") },
      { path: "/index/cviplist", name: "Cviplist", meta: { requireAuth: true }, component: () => import("../views/pages/user/Cviplist.vue") },
      { path: "/index/delagent", name: "Delagent", meta: { requireAuth: true }, component: () => import("../views/pages/user/Delagent.vue") },
      { path: "/index/delvip", name: "Delvip", meta: { requireAuth: true }, component: () => import("../views/pages/user/Delvip.vue") },

      // 代理账目
      { path: "/index/accountlist", name: "Accountlist", meta: { requireAuth: true }, component: () => import("../views/pages/agenaccount/Accountlist.vue") },
          { path: "/index/accountlistdetails", name: "Accountlistdetails", meta: { requireAuth: true }, component: () => import("../views/pages/agenaccount/Accountlistdetails.vue") },
      { path: "/index/settle", name: "Settle", meta: { requireAuth: true }, component: () => import("../views/pages/agenaccount/Settle.vue") },
          { path: "/index/settledetails", name: "Settledetails", meta: { requireAuth: true }, component: () => import("../views/pages/agenaccount/Settledetails.vue") },
      { path: "/index/czmsettle", name: "Czmsettle", meta: { requireAuth: true }, component: () => import("../views/pages/agenaccount/Czmsettle.vue") },
          { path: "/index/czmsettledetails", name: "Czmsettledetails", meta: { requireAuth: true }, component: () => import("../views/pages/agenaccount/Czmsettledetails.vue") },
      { path: "/index/csettle", name: "Csettle", meta: { requireAuth: true }, component: () => import("../views/pages/agenaccount/Csettle.vue") },
          { path: "/index/csettledetails", name: "Csettledetails", meta: { requireAuth: true }, component: () => import("../views/pages/agenaccount/Csettledetails.vue") },
      { path: "/index/conaccounts", name: "Conaccounts", meta: { requireAuth: true }, component: () => import("../views/pages/agenaccount/Conaccounts.vue") },

      // 会员账目
      { path: "/index/vipaccountslist", name: "Vipaccountslist", meta: { requireAuth: true }, component: () => import("../views/pages/vipaccounts/Vipaccountslist.vue") },
      { path: "/index/cvipaccountslist", name: "Cvipaccountslist", meta: { requireAuth: true }, component: () => import("../views/pages/vipaccounts/Cvipaccountslist.vue") },
          // 详情
          { path: "/index/vipaccountslistdetails", name: "Vipaccountslistdetails", meta: { requireAuth: true }, component: () => import("../views/pages/vipaccounts/Vipaccountslistdetails.vue") },
          { path: "/index/cvipaccountslistdetails", name: "Cvipaccountslistdetails", meta: { requireAuth: true }, component: () => import("../views/pages/vipaccounts/Cvipaccountslistdetails.vue") },

      // 铺流水账目
      { path: "/index/runninglist", name: "Runninglist", meta: { requireAuth: true }, component: () => import("../views/pages/running/Runninglist.vue") },
      // { path: "/index/changerunning", name: "Changerunning", meta: { requireAuth: true }, component: () => import("../views/pages/running/Changerunning.vue") },
           // 详情
         { path: "/index/runninglistdetails", name: "Runninglistdetails", meta: { requireAuth: true }, component: () => import("../views/pages/running/Runninglistdetails.vue") },


      // 台桌管理
      { path: "/index/desklist", name: "Desklist", meta: { requireAuth: true }, component: () => import("../views/pages/desk/Desklist.vue") },
      // 详情
         { path: "/index/desklistdetails", name: "Desklistdetails", meta: { requireAuth: true }, component: () => import("../views/pages/desk/Desklistdetails.vue") },
      // { path: "/index/deskdetails", name: "Deskdetails", meta: { requireAuth: true }, component: () => import("../views/pages/desk/Deskdetails.vue") },

      // 龙虎和局
      { path: "/index/dragontiger", name: "Dragontiger", meta: { requireAuth: true }, component: () => import("../views/pages/dragontiger/Dragontiger.vue") },
      // 详情
      { path: "/index/dragontigerdetails", name: "Dragontigerdetails", meta: { requireAuth: true }, component: () => import("../views/pages/dragontiger/Dragontigerdetails.vue") },
      // { path: "/index/dragontiger1", name: "Dragontiger1", meta: { requireAuth: true }, component: () => import("../views/pages/dragontiger/Dragontiger1.vue") },
      // 洗码账目
      { path: "/index/codeclearing", name: "Codeclearing", meta: { requireAuth: true }, component: () => import("../views/pages/codeclearing/Codeclearing.vue") },
      // 详情
        { path: "/index/codeclearingdetails", name: "Codeclearingdetails", meta: { requireAuth: true }, component: () => import("../views/pages/codeclearing/Codeclearingdetails.vue") },
      // { path: "/index/codeclearing1", name: "Codeclearing1", meta: { requireAuth: true }, component: () => import("../views/pages/codeclearing/Codeclearing1.vue") },
      // 系统设置
      { path: "/index/setup", name: "Setup", meta: { requireAuth: true }, component: () => import("../views/pages/setup/Setup.vue") },
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
