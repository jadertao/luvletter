import dlv from 'dlv';
import { Router } from '@angular/router';

/**
 *
 *
 * @export
 * @param {string} key
 * @returns
 */
export function getItemFromLocalStorage(key: string): any {
  const config = localStorage.getItem('luvletter');
  if (config) {
    return JSON.parse(config)[key];
  } else {
    return null;
  }
}


/**
 *
 *
 * @export
 * @param {string} key
 * @param {*} value
 */
export function saveItemToLocalStorage(key: string, value: any) {
  try {
    let oldConfig = localStorage.getItem('luvletter');
    if (!oldConfig) {
      oldConfig = '{}';
    }
    const config = JSON.parse(oldConfig);
    config[key] = value;
    localStorage.setItem('luvletter', JSON.stringify(config));
  } catch (error) {
    throw error;
  }
}


/**
 * 批量存储
 *
 * @export
 * @param {object} batch
 */
export function saveBatchItemToLocalStorage(batch: object) {
  try {
    let oldConfig = localStorage.getItem('luvletter');
    if (!oldConfig) {
      oldConfig = '{}';
    }
    const config = JSON.parse(oldConfig);
    Object.assign(config, batch);
    localStorage.setItem('luvletter', JSON.stringify(config));
  } catch (error) {
    throw error;
  }
}


/**
 *
 *
 * @export
 * @param {string} key
 */
export function removeItemFromLocalStorage(key: string) {
  try {
    const config = JSON.parse(localStorage.getItem('luvletter'));
    delete config[key];
    localStorage.setItem('luvletter', JSON.stringify(config));
  } catch (error) {
    throw error;
  }
}

export function removeBatchItemFromLocalStorage(batch: string[]) {
  try {
    batch.forEach(v => removeItemFromLocalStorage(v));
  } catch (error) {
    throw error;
  }
}

export function clearLocalStorage() {
  localStorage.setItem('luvletter', JSON.stringify({}));
}

export const getValueOfUserInfo = (router: Router) => (key?: string): any => {
  const userInfo = getItemFromLocalStorage('userInfo');
  if (userInfo) {
    if (!key) {
      return userInfo;
    }
    const value = dlv(userInfo, key);
    if (value) {
      return value;
    }
  }
  clearLocalStorage();
  router.navigate(['/login']);
  return null;
};
