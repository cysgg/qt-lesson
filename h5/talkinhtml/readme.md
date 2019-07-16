- 先写html结构
    正确且完整的结构
    良好的类名
- &gt; 转义字符串 >

- 用section 代替div 完成区块的语义化

- stylus 嵌套
    tab 缩进解决的是效率
    嵌套 css规则按区块来嵌套在一起，作用域，css类名的补全

- 伪类、伪元素 用&引用上级的选择器
    比如： 
    a
        &:hover
        &::before
    转义成css样式
    a:hover
    a::before

- 子元素选择器