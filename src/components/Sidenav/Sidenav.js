import { appConfig } from '@/config/app.js'

export default {
    name: 'Sidenav',
    data() {
        return {
            appName: appConfig.APP_NAME
        }
    },
}