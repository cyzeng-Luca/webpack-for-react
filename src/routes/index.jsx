import Layout from '@page/layout';
import Agent from '@page/agent';

const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Agent,
      },
    ],
  },
];

export default routes;
