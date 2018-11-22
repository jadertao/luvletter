import { CustomError } from './interface';

export function formatError(err: CustomError) {
  if (!err.message && !err.message) {
    console.log(err);
    return '未知错误，请检查网络';
  }
  return `${err.error}: ${err.message}`;
}
