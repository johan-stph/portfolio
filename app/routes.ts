import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/canvas', 'routes/canvas.tsx'),
  route('/blog', 'routes/blog.tsx'),
  route('/blog/:postId', 'routes/blog.$postId.tsx'),
] satisfies RouteConfig;
