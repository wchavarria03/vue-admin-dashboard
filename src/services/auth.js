import Axios from 'axios';
import Vue from 'vue';
import VueAxios from 'vue-axios';
import { VueAuthenticate } from 'vue-authenticate';
import authenticateConfig from '../utils/vueAuthenticateConfig';

Vue.use(VueAxios, Axios);

const vueAuthInstance = new VueAuthenticate(Vue.prototype.$http, authenticateConfig);

export default vueAuthInstance;
