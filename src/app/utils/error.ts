import { CustomError } from './interface';

export function formatError(err: CustomError) {
  console.log(err);
  return `${err.error}: ${err.message}`;
}
