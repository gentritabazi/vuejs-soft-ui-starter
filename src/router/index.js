// Import
import { createWebHistory, createRouter } from 'vue-router'
import publicRoutes from './PublicRoutes.js'
import privateRoutes from './PrivateRoutes.js'
import store from '@/store'

// Start vue router
const router = createRouter({
    history: createWebHistory(),
    routes: [...publicRoutes, ...privateRoutes]
})

// Middlewares
router.beforeEach((to, from, next) => {
    // Redirect to route
    let redirectToRoute = function (name) {
        if (name === from.name) {
            next()
            return
        }

        next({ name: name })
    }

    // Get logged user
    let loggedUser = store.getters.getLoggedUser

    // Check if access token expired
    if (loggedUser) {
        let currentDateTime = new Date().getTime()
        if (currentDateTime > loggedUser.expiryDate) {
            store.dispatch('logOut')
            return redirectToRoute('admin.login')
        }
    }

    // Auth
    if (to.meta.auth) {
        if (loggedUser)
            return next()
        else
            return redirectToRoute('admin.login')
    }

    // Guest
    if (to.meta.guest) {
        if (loggedUser)
            return redirectToRoute('admin.dashboard')
        else
            return next()
    }

    next()
})

// Export
export default router