- 项目架构 目录
  1. api 前后端分离
    vue 前端
    ajax 连接 axios
    /api/v2/products/:1
  2. pages components
  3. vuex store 设置？
  4. utils js 公共方法
  5. css/style 用的多

  20+ 页面的架构

- 路由
  懒加载 file => () => import(file)

- page 组件化
  页面由组件构成
  页面级组件 /pages
  可复用组件 /components
    - 全栈常用的公共组件， 跟业务无关 elementUI /components/common/
  容器组件
    PC 页面量 切页面工作交给组件化 html section概念来做的

- app.vue根组件，reset 工作 通用样式
- 界面+状态 === 完成开发