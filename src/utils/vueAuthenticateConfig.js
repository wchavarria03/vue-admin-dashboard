export default {
  baseUrl: 'http://localhost:3001',
  tokenName: 'access_token',
  requestDataKey: 'data',
  responseDataKey: 'data',
  loginUrl: '/api/signin',
  bindRequestInterceptor: function () {
    this.$http.interceptors.request.use((config) => {
      if (this.isAuthenticated()) {
        config.headers['Authorization'] = [
          this.options.tokenType, this.getToken()
        ].join(' ');
      } else {
        delete config.headers['Authorization'];
      }
      return config;
    });
  },

  bindResponseInterceptor: function () {
    this.$http.interceptors.response.use((response) => {
      this.setToken(response);
      return response;
    });
  }
};
