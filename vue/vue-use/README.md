- Vue
 VueRouter 路由
 Vuex 数据流

 Element-ui PC
 MintUI/IVIEW mobile
 插件
 Vue瘦身 MVVM
 其他的都是他的周边生态
 插件机制往里加
 Vue.use(plugin)
 plugin 按照一定的规则
 this.$route
 Vue.prototype

- ElementUI 有两种引入组件的方式
  <el-button />
  Vue.component()
  const components = []
  forEach()

- 写一个Vue组件， 开源插件 100+
  {
    install： function () {
      Vue.component(component.name, component)
      Vue.prototype.$message = Message
    }
  }
  Vue.use(plugin) 执行install