import GuestLayout from '@/layouts/Guest';
import Api from '@/utils/api';

export default {
  name: 'Login',

  data() {
    return {
      email: null,
      password: null,
    };
  },

  components: {
    GuestLayout,
  },

  methods: {
    login() {
      const response = Api.post('/login', { email: self.email, password: self.password });

      self.$store.commit('LOGGED_USER', response.data);

      self.$router.go({ name: 'admin.dashboard' });
    },
  },
};
