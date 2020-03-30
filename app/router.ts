import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;

  router.get('/', controller.home.index);

  router.get('/user/:id', controller.home.info);

  router.get('/search', middleware.uppercase(), controller.home.search);

  router.get('/addcookie', controller.home.addCookie);

  router.get('/rmcookie', controller.home.removeCookie);

  router.get('/addsession', controller.home.addSession);

  router.get('/getsession', controller.home.getSession);
};
