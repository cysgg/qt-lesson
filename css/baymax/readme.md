- 伪元素

    不用标签，在css中使用:before :after来申明，可以像真正的标签一样用
    在做分割线， > 箭头， 不用标签很方便

    天生是行内元素，不可以设置width/height,有内容content决定
    可以改变 display:block; position: absolute;

    + :before
        元素内容开始之前

    + :after 
        元素内容结束之后

    都需要设置content属性，才会显示在页面上

- css3 带来炫酷

    gradient(开始的位置 circle at center, color stops... #fff 50%,) 渐变

        
    + radial-gradient(环形渐变)
    
    + linear-gradient(线性渐变)
- 相对单位

    em 相对单位 自身的字体大小