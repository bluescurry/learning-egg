// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUppercase from '../../../app/middleware/uppercase';

declare module 'egg' {
  interface IMiddleware {
    uppercase: typeof ExportUppercase;
  }
}
