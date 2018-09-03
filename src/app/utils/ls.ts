
/**
 *
 *
 * @export
 * @param {string} key
 * @returns
 */
export function getItemFromLocalStorage(key: string): any {
  const all = localStorage.getItem('luvletter');
  if (all) {
    return JSON.parse(all)[key];
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
    const all = JSON.parse(localStorage.getItem('luvletter'));
    all[key] = value;
    localStorage.setItem('luvletter', JSON.stringify(all));
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
    Object.keys(batch).forEach((key: string) => {
      saveItemToLocalStorage(key, batch[key]);
    });
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
    const all = JSON.parse(localStorage.getItem('luvletter'));
    delete all[key];
  } catch (error) {
    throw error;
  }
}

export function removeBatchItemFromLocalStorage(batch: string[]) {
  try {
    batch.forEach(v => removeItemFromLocalStorage[v]);
  } catch (error) {
    throw error;
  }
}

