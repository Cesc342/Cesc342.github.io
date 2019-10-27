function guardar(key,item) {
  localStorage.setItem(key,item);
}

function mirar(key) {
  return localStorage.getItem(key);
}
