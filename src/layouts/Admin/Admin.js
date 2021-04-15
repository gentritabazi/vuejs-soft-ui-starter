// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import sidenavComponent from '@/components/Sidenav'

export default {
    name: 'AdminLayout',
    components: { sidenavComponent },
    mounted() {
        document.body.classList.add('g-sidenav-show', 'bg-gray-100')
    }
}