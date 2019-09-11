function $(args) {
  if (typeof args == 'function') {
    document.addEventListener('DOMContentLoaded', p1, false)
  } else {
    return document.querySelector(p1)
  }
}

$(function() {
  // 浏览器 DOM + CSS 优先形成一个DOM树 DOMReady
  // js DOM 节点加入时间
  // 异步资源加载完毕 onLoad
  console.log('DOM Ready');
  //接下来浏览器将会开启新的进程， 去下载其他更耗时的资源
  console.log($('.box'));
})