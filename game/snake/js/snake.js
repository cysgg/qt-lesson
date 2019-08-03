document.addEventListener('DOMContentLoaded', () => {
    var gameCanvas = document.getElementById('gameCanvas');
    snake.snakebg.init(gameCanvas,{snakeSpeed : 5});//初始化
    snake.snakebody.drawSnake()//一开始的画面
    snake.game.start()//开始游戏
})


const snake = {
    options : {
        bgfillStyle : 'white',
        bgstrokeStyle : 'darkgreen',
        snakeFillStyle : 'lightgreen',
        snakestrokeStyle : 'darkgreen',
        pointFillStyle : 'red',
        pointstrokeStyle : 'darkred',
        snakeSpeed : 1
    },
    canvasDom: null,
    dection: 'right', // 方向
    timeInterval: null,
    ctx: null,
    dectioncommands : ['right'],//暂存指令集
    snakeself: [{
        x: 150,
        y: 150
    }, {
        x: 140,
        y: 150
    }, {
        x: 130,
        y: 150
    }, {
        x: 120,
        y: 150
    }, {
        x: 110,
        y: 150
    }],
    game: {
        start: () => {
            window.addEventListener('keypress', e => {
                switch (parseInt(e.keyCode)) {
                    case 119:
                        if (snake.dection != 'down')
                            snake.dectioncommands.push('up')
                        break;
                    case 115:
                        if (snake.dection != 'up')
                            snake.dectioncommands.push('down')
                        break;
                    case 97:
                        if (snake.dection != 'right')

                            snake.dectioncommands.push('left')
                        break;
                    case 100:
                        if (snake.dection != 'left')
                            snake.dectioncommands.push('right')
                        break;
                    default:
                        break;
                }

            })
            let speed = parseInt(1000/Number(snake.options.snakeSpeed))
            console.log(speed);
            
            snake.timeInterval = setInterval(snake.game.snakerun, speed)
        },
        ishike: (snakebody) => {
            return snakebody.some(item => {
                return attckWin(item.x, 0, snake.canvasDom.width) || eatself(snakebody) || attckWin(item.y, 0, snake.canvasDom.height)
            })

            function attckWin(num, bot, top) {
                return num < bot || num > top - 10;
            }

            function eatself(list) {
                let listobj = []
                for (const item of list) {
                    if (snake.game.isEatRect(listobj, item)) {
                        return true
                    }
                    listobj.push(item)
                }
                return false
            }
        },
        snakerun: () => {
            if (snake.dectioncommands.length) {
                snake.dection = snake.dectioncommands.shift();
            }
            
            let newlist = snake.snakeself.slice(0, snake.snakeself.length - 1)
            let x = snake.snakeself[0].x + snake.keyDirction[snake.dection].x * 10
            let y = snake.snakeself[0].y + snake.keyDirction[snake.dection].y * 10
            newlist.unshift({
                x,
                y
            })
            snake.snakeself = newlist
            if (snake.game.isEatRect(newlist, snake.point)) {
                snake.snakebody.addSnakePart()
                snake.point.randomPoint()
                snake.point.drawPoint()
            }
            if (snake.game.ishike(newlist)) {
                clearInterval(snake.timeInterval)
            } else {
                snake.ctx.clearRect(0, 0, snake.canvasDom.width, snake.canvasDom.height)
                snake.snakebg.paintbg()
                snake.snakebody.drawSnake()
                snake.point.drawPoint()
            }
        },
        isEatRect: (rect1, rect2) => {
            for (i of rect1) {
                if (i.x == rect2.x && i.y == rect2.y) {
                    return true
                }
            }
            return false
        }
    },
    snakebg: {
        init: (canvas,options) => {
            snake.canvasDom = canvas
            snake.ctx = canvas.getContext('2d');
            Object.assign(snake.options,snake.options,options)
            snake.snakebg.paintbg()
            snake.point.randomPoint()
            snake.point.drawPoint()
        },
        paintbg: () => {
            snake.ctx.fillStyle = snake.options.bgfillStyle
            snake.ctx.strokeStyle = snake.options.bgstrokeStyle
            snake.ctx.fillRect(0, 0, snake.canvasDom.width, snake.canvasDom.height)
            snake.ctx.strokeRect(0, 0, snake.canvasDom.width, snake.canvasDom.height)
        }
    },
    snakebody: {
        drawSnake: () => {
            snake.snakeself.forEach(item => {
                snake.snakebody.drawSnakePart(item.x, item.y)
            });
        },
        drawSnakePart: (dx, dy) => {
            snake.ctx.fillStyle = snake.options.snakeFillStyle
            snake.ctx.strokeStyle = snake.options.snakeStrokeStyle
            snake.ctx.fillRect(dx, dy, 10, 10)
            snake.ctx.strokeRect(dx, dy, 10, 10)
        },
        addSnakePart: () => {
            snake.snakeself.push({})
        }
    },
    point: {
        x: 0,
        y: 0,
        drawPoint: () => {
            snake.ctx.fillStyle = snake.options.pointFillStyle
            snake.ctx.strokeStyle = snake.options.pointStrokeStyle
            snake.ctx.fillRect(snake.point.x, snake.point.y, 10, 10)
            snake.ctx.strokeRect(snake.point.x, snake.point.y, 10, 10)
        },
        randomPoint: () => {
            snake.point.x = parseInt(Math.random() * parseInt(snake.canvasDom.width / 10)) * 10
            snake.point.y = parseInt(Math.random() * parseInt(snake.canvasDom.height / 10)) * 10
        }
    },
    keyDirction: {
        right: {
            x: 1,
            y: 0
        },
        up: {
            x: 0,
            y: -1
        },
        left: {
            x: -1,
            y: 0
        },
        down: {
            x: 0,
            y: 1
        }
    }
}