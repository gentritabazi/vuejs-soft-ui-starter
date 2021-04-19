import { appConfig } from '@/config/app.js'

export default {
    name: 'GuestLayout',
    data() {
        return {
            appName: appConfig.APP_NAME
        }
    }
}