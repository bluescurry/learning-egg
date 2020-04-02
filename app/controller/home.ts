import { Controller } from 'egg';
import { ValidationError } from 'ajv';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const serviceRes = await ctx.service.test.sayHi('bluescurry');
    ctx.body = {
      // env: app.config.env,
      // config: app.config,
      serviceRes,
    };
  }

  public async info() {
    const { ctx } = this;
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    };
  }

  public async search() {
    const { ctx } = this;

    ctx.logger.info('调用 search 接口');

    ctx.body = {
      search: `search ${ctx.query.search}`,
    };
  }

  public async addCookie() {
    const { ctx } = this;
    const count = ctx.cookies.get('count', {
      signed: false,
    });
    console.log('count ---> ', count);
    let newCount = count ? Number(count) : 0;
    ctx.cookies.set('count', `${++newCount}`, {
      httpOnly: false,
      signed: false,
    });
    ctx.body = count;
  }

  public async removeCookie() {
    const { ctx } = this;
    ctx.cookies.set('count', undefined);
    ctx.status = 204;
  }

  public async addSession() {
    const { ctx } = this;
    ctx.session.useId = '123';
    ctx.body = {
      success: true,
    };
  }

  public async getSession() {
    const { ctx } = this;
    const { useId } = ctx.session;
    ctx.body = {
      session: useId,
    };
  }

  public async testAjv() {
    try {
      await this.ctx.validate('schema.pagination', this.ctx.request.query);
    } catch (error) {
      console.log('ValidationError ---> ', ValidationError);
      console.log('error ---> ', error);
      console.log('error ---> ', error instanceof ValidationError);
    }
    // this.ctx.body = 'success';
  }
}
