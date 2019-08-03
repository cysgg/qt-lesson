var jsWrapBg = document.getElementById('wrapbg')
var jsHeadTitle = document.getElementById('headTitle')
var jsGrassLand1 = document.getElementById('grassLand1')
var jsGrassLand2 = document.getElementById('grassLand2')
var jsHeadBird = document.getElementById('headBird')
var blocksArr = []
var blockDistance = baseObj.randomNum(120,350)

var landTime = setInterval(landRun,20)
function landRun(){

    if(jsGrassLand1.offsetLeft <= -343){
        jsGrassLand1.style.left ='343px'
    }
    if(jsGrassLand2.offsetLeft <= -343){
        jsGrassLand2.style.left ='343px'
    }
    jsGrassLand1.style.left = jsGrassLand1.offsetLeft - 3 + 'px'
    jsGrassLand2.style.left = jsGrassLand2.offsetLeft - 3 + 'px'

    if(blocksArr.length){
        for (let i = 0; i < blocksArr.length; i++) {
            blocksArr[i].moveBlock()
            var x = baseObj.recttangleCrashExamine(blocksArr[i].downDivWrap,bird.div)
            var y = baseObj.recttangleCrashExamine(blocksArr[i].upDivWrap,bird.div)
            var z = bird.div.offsetTop >= 390
            
            if(x || y || z){
                window.clearInterval(landTime)
                bird.fallSpeed = 0
                jsWrapBg.addEventListener('click',null)
                jsWrapBg.addEventListener('keydown',null)
            }
            
        }
        if(blocksArr[blocksArr.length - 1].downDivWrap.offsetLeft < (450-blockDistance)){
            blockDistance = baseObj.randomNum(130,250)
            var newBlock = new Block()
            newBlock.createBlock()
            blocksArr.push(newBlock)
        }
    }
}

var Y = 3
var index = 0
var imgArr = ['./img/bird0.png','./img/bird1.png']
//利用帧动画的原理做出小鸟摆动翅膀的动画
var headWaveTimer = setInterval(headWave,200)
function headWave(){
    Y *= -1
    jsHeadTitle.style.top = jsHeadTitle.offsetTop + Y + 'px'
    jsHeadBird.src = imgArr[index++]
    if(index > 1){
        index = 0
    }
}

var jsStartBtn = document.getElementById('startBtn')
jsStartBtn.addEventListener('click',()=>{
    jsHeadTitle.style.display = 'none'
    jsStartBtn.style.display = 'none'
    clearInterval(headWaveTimer)
    bird.showBird(jsWrapBg) //插入小鸟到页面中
    bird.flyBird() //控制小鸟下落
    bird.wingWave() //逐帧动画，小鸟煽动翅膀
    jsWrapBg.addEventListener('click',()=>{
        bird.fallSpeed = -8
    })
    window.addEventListener('keydown',(event)=>{
        if(event.keyCode == 32)
        bird.fallSpeed = -8
    })

    var b = new Block()
    b.createBlock()
    blocksArr.push(b)
    //开始出现管道了
})

