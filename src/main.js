import Axios from 'axios';
import Vue from 'vue';
import VueAuthenticate from 'vue-authenticate';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import vClickOutside from 'v-click-outside';

// Plugins
import GlobalComponents from './globalComponents';
import Notifications from './components/UIComponents/NotificationPlugin';
import SideBar from './components/UIComponents/SidebarPlugin';
import App from './App';

// configs
import routes from './routes/routes';
import authenticateConfig from './utils/vueAuthenticateConfig';

// library imports
import Chartist from 'chartist';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/sass/paper-dashboard.scss';
import 'es6-promise/auto';

// plugin setup
Vue.use(VueAxios, Axios);
Vue.use(VueRouter);
Vue.use(VueAuthenticate, authenticateConfig);
Vue.use(GlobalComponents);
Vue.use(vClickOutside);
Vue.use(Notifications);
Vue.use(SideBar);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
});

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
  data: {
    Chartist: Chartist
  }
});
