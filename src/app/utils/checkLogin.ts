import { getItemFromLocalStorage } from './ls';

export function checkLogin(): boolean {
  if (getItemFromLocalStorage('token')) { return true; }

  return false;
}
