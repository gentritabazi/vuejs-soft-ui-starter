import { useNotificationStore } from '@dafcoe/vue-notification'

export function showNotification(data) {
    const { setNotification } = useNotificationStore()
    setNotification(data)
}
