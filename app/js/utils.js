export function setLocalData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalData(key) {
  return JSON.parse(localStorage.getItem(key));
}
