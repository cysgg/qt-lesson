const w = new Map()

function fn(n) {
  if(n == 1) return 1;
  if(n == 2) return 2;
  if(w.has(n))
  return w.get(n)
  var ret = fn(n-1) + fn(n-2)
  w.set(n,ret)
  return ret
}

console.log(fn(7));
