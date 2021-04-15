// Import Modules
const dashboard = () => import('@/modules/Dashboard');

// Export
export default [
    // Home
    {
        path: '/',
        redirect: '/dashboard' 
    },

    // Dashboard
    {
        path: '/dashboard',
        component: dashboard,
        name: 'dashboard'
    }
]