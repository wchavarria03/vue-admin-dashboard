export function getToken() {
  return localStorage.getItem('token');
}

export function isLoggedIn() {
  const idToken = getToken();
  return !!idToken;
}

export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({ path: '/' });
  } else {
    next();
  }
}

export function verifyIsLoggedIn(to, from, next) {
  if (isLoggedIn() && to.name === 'login') {
    next({ name: 'dashboard' });
  } else {
    next();
  }
}
