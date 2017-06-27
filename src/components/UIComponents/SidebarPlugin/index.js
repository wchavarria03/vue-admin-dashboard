import Sidebar from './SideBar.vue';

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/app/overview'
    },
    {
      name: 'User Profile',
      icon: 'ti-user',
      path: '/app/stats'
    },
    {
      name: 'Table List',
      icon: 'ti-view-list-alt',
      path: '/app/table-list'
    },
    {
      name: 'Typography',
      icon: 'ti-text',
      path: '/app/typography'
    },
    {
      name: 'Icons',
      icon: 'ti-pencil-alt2',
      path: '/app/icons'
    },
    {
      name: 'Maps',
      icon: 'ti-map',
      path: '/app/maps'
    },
    {
      name: 'Notifications',
      icon: 'ti-bell',
      path: '/app/notifications'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value;
  }
};

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        };
      }
    });

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore;
      }
    });
    Vue.component('side-bar', Sidebar);
  }
};

export default SidebarPlugin;
