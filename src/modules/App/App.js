import { mapGetters } from 'vuex';
import Loader from '@/components/Loader';
import Notification from '@/components/Notification';

export default {
  name: 'App',

  components: { Loader, Notification },

  computed: {
    ...mapGetters({
      displayLoader: 'getDisplayLoader',
    }),
  },
};
