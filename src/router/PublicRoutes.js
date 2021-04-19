// Import Modules
const login = () => import('@/modules/Login')

// Export
export default [

    // Home
    {
        path: '/',
        redirect: '/admin/dashboard' 
    },

    // Login
    {
        path: '/admin/login',
        component: login ,
        name: 'admin.login'
    },

]