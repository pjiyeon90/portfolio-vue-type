import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ProjectView from '@/views/ProjectView.vue';
import DesignView from '@/views/DesignView.vue';
import Contact from '@/views/ContactView.vue';


// menuOpen을 관리하기 위한 전역 상태
let menuOpenState: { closeMenu: () => void } | null = null;

export function setMenuOpenHandler(handler: { closeMenu: () => void }) {
  menuOpenState = handler;
}


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/design',
    name: 'design',
    component: DesignView
  },  
  {
    path: '/project',
    name: 'project',
    component: ProjectView 
  }, 
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach(() => {
  if (menuOpenState) {
    menuOpenState.closeMenu(); // 페이지 이동 시 메뉴 닫기
  }
});

export default router
