import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import sidenavComponent from '@/components/Sidenav'
import navbarComponent from '@/components/Navbar'

export default {
    name: 'AdminLayout',
    components: { sidenavComponent, navbarComponent },
    mounted() {
        document.body.classList.add('g-sidenav-show', 'bg-gray-100')
    }
}