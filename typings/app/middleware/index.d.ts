// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportError from '../../../app/middleware/error';
import ExportUppercase from '../../../app/middleware/uppercase';

declare module 'egg' {
  interface IMiddleware {
    error: typeof ExportError;
    uppercase: typeof ExportUppercase;
  }
}
