;
var bird = {
    flyTimer: null, //小鸟飞翔定时器
    wingTimer: null, //小鸟摆动定时器
    div: document.createElement('div'),
    showBird: function (parentObj) {
        this.div.style.width = '40px'
        this.div.style.height = '28px'
        this.div.style.backgroundImage = 'url(img/bird0.png)'
        this.div.style.backgroundRepeat = 'no-repeat'
        this.div.style.position = 'absolute'
        this.div.style.left = '50px'
        this.div.style.top = '200px'
        this.div.style.zIndex = '1'
        parentObj.appendChild(this.div)
    },
    fallSpeed: 0, //小鸟下落的速度
    flyBird: function () {
        bird.flyTimer = setInterval(fly, 60)

        function fly() {
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px'

            if (bird.div.offsetTop < 0) {
                bird.fallSpeed = 2
            }
            if (bird.div.offsetTop >= 395) {
                bird.fallSpeed = 0
                clearInterval(bird.flyTimer)
                clearInterval(bird.wingTimer)
            }
            if (bird.fallSpeed > 4) { // 下落限速
                bird.fallSpeed = 4
            }
        }
    },
    wingWave: function () {
        var up = ['url(img/up_bird0.png)', 'url(img/up_bird1.png)']
        var down = ['url(img/down_bird0.png)', 'url(img/down_bird1.png)']
        var i = 0,
            j = 0;
        bird.wingTimer = setInterval(wing, 120)

        function wing() {
            if (bird.fallSpeed > 0) {
                bird.div.style.backgroundImage = down[i++]
                if (i > 1) {
                    i = 0
                }
            }
            if (bird.fallSpeed < 0) {
                bird.div.style.backgroundImage = up[j++]
                if (j > 1) {
                    j = 0
                }
            }
        }
    }

}