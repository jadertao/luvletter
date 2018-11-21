import dlv from 'dlv';
import { getItemFromLocalStorage } from './ls';

export function checkLogin(): boolean {
  if (dlv(getItemFromLocalStorage('userInfo'), 'token')) { return true; }

  return false;
}
