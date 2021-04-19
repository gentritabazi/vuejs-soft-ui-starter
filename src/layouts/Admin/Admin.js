import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import sidenavComponent from '@/components/Sidenav'
import navbarComponent from '@/components/Navbar'

export default {
    name: 'AdminLayout',
    components: { sidenavComponent, navbarComponent },
    mounted() {
        document.body.classList.add('g-sidenav-show', 'bg-gray-100')

        this.setupTheme()
    },
    methods: {
        setupTheme() {
            const iconNavbarSidenav = document.getElementById('iconNavbarSidenav')
            const iconSidenav = document.getElementById('iconSidenav')
            const sidenav = document.getElementById('sidenav-main')
            let body = document.getElementsByTagName('body')[0]
            let className = 'g-sidenav-pinned'

            if (iconNavbarSidenav) {
                iconNavbarSidenav.addEventListener("click", toggleSidenav)
            }

            if (iconSidenav) {
                iconSidenav.addEventListener("click", toggleSidenav)
            }

            function toggleSidenav() {
                if (body.classList.contains(className)) {
                    body.classList.remove(className)
                    setTimeout(function () {
                        sidenav.classList.remove('bg-white')
                    }, 100)
                    sidenav.classList.remove('bg-transparent')
                } else {
                    body.classList.add(className)
                    sidenav.classList.add('bg-white')
                    sidenav.classList.remove('bg-transparent')
                    iconSidenav.classList.remove('d-none')
                }
            }
        }
    }
}