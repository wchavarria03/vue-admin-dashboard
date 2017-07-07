import Vue from 'vue';
import { VueAuthenticate } from 'vue-authenticate';
import authenticateConfig from '../utils/vueAuthenticateConfig';

const vueAuthInstance = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: 'http://localhost:3000'
});

Vue.use(VueAuthenticate, authenticateConfig);

export default vueAuthInstance;