// Import
import { createWebHistory, createRouter } from 'vue-router'
import publicRoutes from './PublicRoutes.js'
import privateRoutes from './PrivateRoutes.js'

// Start vue router
const router = createRouter({
    history: createWebHistory(),
    routes: [...publicRoutes, ...privateRoutes]
})

// Export
export default router