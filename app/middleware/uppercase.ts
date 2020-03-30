import { Context } from 'egg';

export default (): any => {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.query.search = ctx.query.search && ctx.query.search.toUpperCase();
    await next();
  };
};
