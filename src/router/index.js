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
const test = () => import("@/views/test")
const Earth = () => import("@/views/Earth")
const SnakeGame = () => import("@/views/Earth")
const StarBackground = () => import("@/views/StarBackground");
import pdfShow from '@/views/pdfShow'
import FileUpdate from '@/views/FileUpdate.vue'
const routes = [
  {
    path:'/loginPage',
    redirect:'loginPage'
  },
  {
    path: '/editPage',
    name: 'editPage',
    component: EditPage
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
    name: "loginPage",
    component: login,
  },
  {
    path: '/editPart',
    component: editPart
  },
  {
    path: '/test',
    component: test
  },
  {
    path: '/Earth',
    name: "Earth",
    component: Earth,
  },
  {
    path: '/SnakeGame',
    name: "SnakeGame",
    component: SnakeGame,
  },
  {
    path: '/StarBackground',
    name: "StarBackground",
    component: StarBackground,
  },
  {
    path: '/test',
    name: 'test',
    component:test
  },
  {
    path: '/pdfShow',
    name: 'pdfShow',
    component:pdfShow
  },
  {
    path: '/FileUpdate',
    name: 'FileUpdate',
    component:FileUpdate
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
