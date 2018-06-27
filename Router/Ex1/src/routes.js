import Home from './components/Home.vue';

const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  })
}

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  })
}

const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  })
}

const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  })
}

export const routes = [
  { path: '', component: Home, name: 'home' },
  { path: '/user', component: User, children: [
    { path: '', component: UserStart },
    { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
      console.log('UserDetail middleware');
      next();
    } },
    { path: ':id/edit', component: UserEdit, name: 'edit' }
  ] },
  { path: '/redirect', redirect: '/user' },
  { path: '*', redirect: '/' }
]
