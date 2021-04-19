// Import Modules
const dashboard = () => import('@/modules/Dashboard')
const users = () => import('@/modules/Users')

// Export
export default [

    // Dashboard
    {
        path: '/admin/dashboard',
        component: dashboard,
        name: 'admin.dashboard',
        meta: {
            breadCrumb: [
                { name: 'Dashboard', link: 'admin.dashboard' },
            ]
        }
    },

    // Users
    {
        path: '/admin/users',
        component: users,
        name: 'admin.users',
        meta: {
            breadCrumb: [
                { name: 'Users', link: 'admin.users' }
            ]
        }
    },

]