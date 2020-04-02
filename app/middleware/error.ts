// import { ValidationError } from 'ajv';
import { Context } from 'egg';

export default () => {
  return async (_ctx: Context, next: () => Promise<any>) => {
    try {
      await next();
    } catch (e) {
      await next();
      console.log('e ---> ', e);
      // console.log('ValidationError ---> ', ValidationError);
      console.log('类型判断 ---> ', e instanceof Error);
      /* if (e instanceof ValidationError) {
        ctx.body = {
          code: 422,
          msg: '请求参数错误',
          errors: e.errors,
        };
        ctx.status = 422;
      } else {
        throw e;
      } */
    }
  };
};
