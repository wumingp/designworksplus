import { createRouter, createWebHashHistory } from 'vue-router'

// import homePage from "@/views/homePage";
// import loginPage from "@/views/loginPage";
// import essayPage from "@/views/essayPage";

// import NotFound from "@/views/NotFound";
const home = () =>import("@/views/homePage");
const login = () =>import("@/views/loginPage");
const personMsg = () =>import("@/views/personMsgPage");
const essay = () =>import("@/views/essayPage");
const NotFoundPage = () =>import("@/views/NotFound")
const EditPage = () => import("@/views/editPage")
const editPart = () => import("@/views/editPart")
const routes = [
  {
    path:'/EditPage',
    redirect:'EditPage'
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: home
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: login
  },
  {
    path: '/essayPage',
    name: 'essayPage',
    component: essay
  },
  {
    path: '/personMsgPage',
    name: 'personMsgPage',
    component: personMsg
  },
  {
    path: '/:path(.*)',
    component: NotFoundPage
  },
  {
    path: '/',
    name: "editPage",
    component: EditPage,
  },
  {
    path: '/editPart',
    component: editPart
  }
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
