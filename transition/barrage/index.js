let data = [{
        value: '周杰伦的听妈妈的话，我反复听了好几年',
        time: 5,
        color: 'red',
        speed: 1,
        fontSize: 22
    },
    {
        value: '想快快长大，才能保护她',
        time: 10,
        color: '#00a1f5',
        speed: 1,
        fontSize: 30
    },
    {
        value: '听妈妈的话吧，晚点再恋爱吧！爱呢？',
        time: 6
    },
    {
        value: '听妈妈的话吧，晚点再恋爱吧！爱呢？',
        time: 8
    },
    {
        value: '听妈妈的话吧，晚点再恋爱吧！爱呢？',
        time: 15
    },
    {
        value: '听妈妈的话吧，晚点再恋爱吧！爱呢？',
        time: 35
    },
    {
        value: '听妈妈的话吧，晚点再恋爱吧！爱呢？',
        time: 20
    },
    {
        value: '听妈妈的话吧，晚点再恋爱吧！爱呢？',
        time: 18
    },
    {
        value: '听妈妈的话吧，晚点再恋爱吧！爱呢？',
        time: 10
    }
]

//获取需要用到的所有DOM结构
let getid = function (id) {
    return document.getElementById(id)
}

let canvas = getid('canvas')
let video = getid('video')
let $txt = getid('text')
let $btn = getid('btn')
let $color = getid('color')
let $range = getid('range')


//创建CanvasBarrage类
class CanvasBarrage {
    //constructor 是一种用于创建和初始化对象的特殊方法
    constructor(canvas, video, opts = {}) {
        //如果直接canvas和video都没传，那就直接return掉
        if (!canvas || !video)
            return

        // 直接挂在到this上
        this.video = video
        this.canvas = canvas
        //设置canvas的宽高和video一致
        this.canvas.width = video.width
        this.canvas.height = video.height
        //获取画布，操作画布
        this.cxk = canvas.getContext('2d')

        //设置默认参数
        let defOpts = {
            color: '#e91e63',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        }
        Object.assign(this, defOpts, opts)

        this.isPaused = true //默认True是暂停
        //得到所有的弹幕消息
        this.barrages = this.data.map(item => new Barrage(item, this))
        //渲染
        this.render()
    }

    //渲染
    render() {
        //渲染的第一步 是清除画布
        this.clear()
        //渲染弹幕
        this.renderBarrage()
        //如果没有暂停的话继续渲染
        if (!this.isPaused) {
            //通过raf渲染动画，递归
            requestAnimationFrame(this.render.bind(this))
        }
    }

    clear() {
        //清除整个画布
        this.cxk.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    renderBarrage() {
        //渲染弹幕的方法 首先拿到当前视频播放的时间 根据该时间来和弹幕要展示的时间来比较，判断是否要展示弹幕
        let time = this.video.currentTime

        //遍历所有的弹幕，
        this.barrages.forEach(barrage => {
            //用一个弹幕处理是否渲染
            if (!barrage.flag && time >= barrage.time) {
                //判断当前弹幕是否初始化
                //如果isInit还是false 就对当前进行初始化
                if (!barrage.isInit) {
                    barrage.init()
                    barrage.isInit = true
                }
                //弹幕要从右往左渲染，所有X的坐标减去当前弹幕的speed即可
                barrage.x -= barrage.speed
                barrage.render() //渲染当前弹幕

                //如果当前弹幕X比自身的宽度还小就表示结束渲染
                if (barrage.x < - barrage.width) {
                    barrage.flag = true
                }
            }
        })
    }

    add(obj) {
        //实际上就是往barrages里面添加一项barrage的实例
        this.barrages.push(new Barrage(obj, this))
    }
}

//创建Barrage类，用来实例化每一个弹幕元素
class Barrage {
    constructor(obj, cxk) {
        this.value = obj.value //弹幕内容
        this.time = obj.time //弹幕时间
        // 吧obj 和 cxk 都挂载到this上，方便获取
        this.obj = obj
        this.context = cxk
    }

    init() {
        // 如果数据里没有涉及到下面四种参数
        this.color = this.obj.color || this.context.color
        this.speed = this.obj.speed || this.context.speed
        this.fontSize = this.obj.fontSize || this.context.fontSize
        this.opacity = this.obj.opacity || this.context.opacity
        console.log(this.color)
        //计算宽高 ，创建P，计算文字的宽度
        let p = document.createElement('p')
        p.style.fontSize = this.fontSize + 'px'
        p.innerHTML = this.value
        document.body.appendChild(p)

        //设置弹幕的宽度
        this.width = p.clientWidth
        // 得到弹幕的宽度之后，就把P标签从body删除
        document.body.removeChild(p)

        // 设置弹幕出现的位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height * Math.random()

        // 做一下超出范围的处理
        if (this.y < this.fontSize)
            this.y = this.fontSize
        else if (this.y > this.context.canvas.height - this.fontSize)
            this.y = this.context.canvas.height - this.fontSize



    }

    render() {
        // 设置画布文字的字体和字号
        this.context.cxk.font = `${this.fontSize}px Arial`
        // 设置画布的颜色
        this.context.cxk.fillStyle = this.color
        
        // 绘制文字
        this.context.cxk.fillText(this.value,this.x,this.y)
    }
}

// 创建CanvasBarrage实例
let canvasBarrage = new CanvasBarrage(canvas,video,{data})
// 设置video 的play事件来调用CanvasBarrage实例的render方法
video.addEventListener('play',()=>{
    canvasBarrage.isPaused = false
    canvasBarrage.render()
})

// 发送弹幕的方法
function send(){
    let value = $txt.value
    let time = video.currentTime
    let color = $color.value
    let fontSize = $range.value
    let obj = {value,time,color,fontSize}

    // 添加弹幕数据
    canvasBarrage.add(obj)
    $txt.value = ''
}

$btn.addEventListener('click',send)