## em
    如果自己设置了 font-size 相对于 自己的 font-size 
    如果没有 相对于父级

## border-image
border-image-source : ulr() linear-gradient
boder-image-slice :裁剪 2 2 2 2

## SEO 
    浏览器会爬取HTML内容 为了SEO 我们放文字，为了美观 放图片，
    场景： 网站的logo 

## css 选择器 优先级
    !important 最高
    style 行内样式 (1000)
    #id (100)
    class (10)
    元素/伪元素(*) (1)
    #box span.active 111
    #box span 101

    同等优先级 后出现覆盖先出现的

## animation-fill-mode
    forwords
    none
    backwrads 动画开始前 将元素的样式设为动画第一帧
    both: forwards + backwrads