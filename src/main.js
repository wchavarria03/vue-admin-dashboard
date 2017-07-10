import vClickOutside from 'v-click-outside';
import Vue from 'vue';

// Plugins
import App from './App';
import GlobalComponents from './globalComponents';
import Notifications from './components/UIComponents/NotificationPlugin';
import SideBar from './components/UIComponents/SidebarPlugin';

// configs
import router from './routes/router';
import store from './store';

// library imports
import Chartist from 'chartist';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/sass/paper-dashboard.scss';
import 'es6-promise/auto';

// plugin setup
Vue.use(GlobalComponents);
Vue.use(vClickOutside);
Vue.use(Notifications);
Vue.use(SideBar);

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist;
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});
