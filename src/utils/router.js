export function go(path) {
  window.location.hash = path;
}

export function getPage() {
  const hash = window.location.hash.replace("#", "");
  return hash || "login";
}