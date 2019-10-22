export function reactive (target) {
  const observer = new Proxy (target, {
    set: function () {
      
    },
    get: function () {
      
    }
  });
  return observer
}