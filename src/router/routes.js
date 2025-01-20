import { About } from '../pages/About';
import { Error } from '../pages/Error';
import { Login } from '../pages/Login';
import { PostIdPage } from '../pages/PostIdPage';
import { Posts } from '../pages/Posts';

export const privateRoutes = [
  {
    name: 'posts',
    path: '/posts',
    component: Posts,
  },
  {
    name: 'postIdPage',
    path: '/posts/:id',
    component: PostIdPage,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'error',
    path: '/error',
    component: Error,
  },
  {
    name: 'homeRedirect',
    path: '/',
    redirectTo: '/posts',
  },
  {
    name: 'notFoundRedirect',
    path: '*',
    redirectTo: '/posts',
  },
];

export const publicRoutes = [
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'redirectToLogin',
    path: '*',
    redirectTo: '/login',
  },
];

export const routes = [...privateRoutes, ...publicRoutes];
