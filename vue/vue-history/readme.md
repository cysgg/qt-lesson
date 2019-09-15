- 链接带来了页面的互联
  一切皆资源 链接表示 URL
  重新刷新
  SPA Single Page Application
## 路由的做法 vue-router 会用不算什么 框架的实现
- 单页应用的结构
  不再是n个页面， 1个页面， 分为不动的部分和动的部分
  导航 nav a #/page1
#  /page1 path 页面切换的 锚链接
  URL 改变了事件， container 元素里 DOM
  大型页面， 方便跳转
  锚链接让点击链接， 不跳转页面成为可能 #/page1 #开头

  路由接管一切 new HashRouter();
  constructor 订阅了hashChange事件

  新的前端世界在打开 要有新的秩序
  管住所有路由

  bind 返回一个新的函数
  call apply传入参数 返回函数的结果

# Vue React SPA Single Page Application 应用体验更好， 页面会白一下
  传统的网页 链接把网站组织起来 重新加载的页面，新的http请求
  /about req,res 过程
  req /about
  时间 网路传输时间，01二进制， 电频的信号 光速 + node/java/python 后端代码，查数据库执行时间，把HTML返回 = 白屏时间
  1.5s 用户就会离开， 0.15 1000W
  res /about about.html
# 路由是独立的
- 网站MVC => 应用(Vue App)体验产生路由 白屏问题
  VueRouter 就来了
  - hasRouter
  #/shop #/
  优点是 ie8以上都支持
  缺点 路由不纯粹
  HistoryRouter history 历史的 /shop 访问历史，记录
  VUERouter 两种方式 = HshRouter(兼容性) + HistoryRouter(长得好看，移动端兼容性还没有问题)