## emmet 快捷输入
vscode 来自微软，
vscode 内置了 emmet插件
- 使用css选择器来快速语法
# dom
    1. 类名选择器 .className
    2. 父子选择器 >
    3. 兄弟选择器 +
    4. 属性选择器 []
    5. 包括 ()

    .starwars-demo>img.star*2[src='url']

# css
    1. 缩略写法 
        m0 ==> margin: 0;
        p0 ==> padding: 0;
        bgc#000 ==>  background-color: #000000;
        w10em ==> width:10em;

- 定位

        css 布局的一种
        position : absolute;
        position : relative;
        body 是最顶层的定位
        父级或一直往外查找，如果有定位元素，则以最近的定位元素定位
        否则就是body

- transfrom 

    变形属性  

        1. translate 移动
        2. scale 缩放
        3. rotate 旋转
    
    三维世界

        perspective 视点与屏幕的距离

        transform-style:preserver-3d
        设置成 3d

- npm node的工具包管理
        live-server 静态网页提供了web-swever 热更新
        npm install -g live-server 下载命令
        js的命令行工具 运行在服务器端

