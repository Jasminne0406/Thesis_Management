import { createRouter, createWebHistory } from 'vue-router';
import loginPage from '../../src/views/loginPage.vue';
import adminHomePage from '../../src/views/adminHomepage.vue';
import detailPage from '../../src/views/detailPage.vue';
import contactPage from '../../src/views/contactPage.vue';
import thesisPage from '../../src/views/thesisPage.vue';
import aboutusPage from '../../src/views/aboutusPage.vue';
import thesisView from '../../src/views/thesisView.vue';
import clientViewDetail from '../../src/views/clientViewDetail.vue';
import clientHomePage from '../../src/views/clientHomePage.vue';
import clientThesisPage from '../../src/views/clientThesisPage.vue';
const routes = [
    {
        path: '/login',
        name: 'loginPage',
        component: loginPage
    },
    {
        path: '/adminHomePage',
        name: 'adminHomePage',
        component: adminHomePage
    },
    {
        path: '/',
        name: 'clientPage',
        component: clientHomePage
    },
    {
        path: '/detailPage',
        name: 'detailPage',
        component: detailPage
    },
    {
        path: '/contactPage',
        name: 'contactPage',
        component: contactPage
    },
    {
        path: '/thesisPage',
        name: 'thesisPage',
        component: thesisPage
    },
    {
        path: '/aboutusPage',
        name: 'aboutusPage',
        component: aboutusPage
    },
    {
        path: '/thesisView',
        name: 'thesisView',
        component: thesisView
    },
    {
        path: '/client/ViewDetail',
        name: 'clientViewDetail',
        component: clientViewDetail
    },
    {
        path: '/client/thesisPage',
        name: 'clientThesisPage',
        component: clientThesisPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
export default router