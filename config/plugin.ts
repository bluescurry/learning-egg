import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  ajv: {
    enable: true,
    package: 'egg-ajv',
  },
};

export default plugin;
