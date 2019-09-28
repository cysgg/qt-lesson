##
<template>
  <div>
    <slot></slot>
  </div>
</template>
里面的东西， 都会被编译为
h ('div', {attrs}, [children])
babel.io

h 函数的返回
一个对象VNode
{
  详细的描述了， 该标签上(<div><component></component></div>)的信息： props, id, class, 子节点
}

虚拟节点 (virtual node) VNode
虚拟DOM 建立起来一个树