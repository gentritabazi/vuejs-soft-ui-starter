export default {
  name: 'Sidenav',

  data() {
    return {
      breadCrumbList: [],
      breadCrumbTotal: 0,
    };
  },

  mounted() {
    this.updateList();
  },

  watch: {
    $route() {
      this.updateList();
    },
  },

  methods: {
    updateList() {
      this.breadCrumbList = this.$route.meta.breadCrumb;
      this.breadCrumbTotal = this.breadCrumbList.length;
    },
  },
};
