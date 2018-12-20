import { Utils } from 'kryfe-lib';

const { asyncComponent } = Utils;

/** webpackChunkName是打包出来的js文件名 */

export const Login = asyncComponent({
  chunkName: 'Login',
  getComponent: () =>
    import(/* webpackChunkName: 'login' */ 'pages/auth/components/login'),
});
export const MainLayout = asyncComponent({
  chunkName: 'MainLayout',
  getComponent: () =>
    import(/* webpackChunkName: 'mainLayout' */ 'layout/main'),
});

export const Carousel = asyncComponent({
  chunkName: 'Carousel',
  getComponent: () =>
    import(/* webpackChunkName: 'Carousel' */ 'pages/advertisement/components/carousel'),
});

export const Product = asyncComponent({
  chunkName: 'Product',
  getComponent: () =>
    import(/* webpackChunkName: 'Product' */ 'pages/advertisement/components/product'),
});

export const NoMatch = asyncComponent({
  chunkName: 'NoMatch',
  getComponent: () => import(/* webpackChunkName: 'noMatch' */ 'pages/noMatch'),
});
