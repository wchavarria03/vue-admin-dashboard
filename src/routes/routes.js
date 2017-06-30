import AppLayout from '../components/App/Layout/AppLayout.vue';
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue';
import Login from '../components/GeneralViews/Login.vue';

// Admin pages
import Overview from 'src/components/App/Views/Overview.vue';
import UserProfile from 'src/components/App/Views/UserProfile.vue';
import Users from 'src/components/App/Users/Users.vue';
import Notifications from 'src/components/App/Views/Notifications.vue';
import Icons from 'src/components/App/Views/Icons.vue';
import Maps from 'src/components/App/Views/Maps.vue';
import Typography from 'src/components/App/Views/Typography.vue';
import TableList from 'src/components/App/Views/TableList.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: AppLayout,
    redirect: '/app/overview'
  },
  {
    path: '/app',
    component: AppLayout,
    redirect: '/app/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile
      },
      {
        path: 'users',
        name: 'users',
        component: Users
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      }
    ]
  },
  { path: '*', component: NotFound }
];

/* *
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};* */

export default routes;
