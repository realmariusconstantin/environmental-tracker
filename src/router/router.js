import { createRouter, createWebHistory } from 'vue-router'

// Importing pages
import Home from '../pages/HomePage.vue'
import LoginPage from '../pages/Login_Page.vue'
import SignupPage from '../pages/Signup_Page.vue'
import Information from '../pages/Information.vue'
import Admin from '../pages/AdminPage.vue'

const routes = [
    { path: '/', component: Home }, // Home page
    { path: '/login', component: LoginPage }, // Login page
    { path: '/signup', component: SignupPage }, // Signup page
    { path: '/article', component: Information }, // Article page
    { path: '/admin', component: Admin }, // Admin page
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router