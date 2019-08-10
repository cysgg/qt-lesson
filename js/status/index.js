function Light(){
    this.state = 'off'//状态
    this.button = null
    this.init()
}

Object.defineProperty(Light,'state',{
    value : 'off',
    set : function(v){
        this.value = v
        Light.button.innerText = v == 'off' ? '开' : '关'
    }
})

Light.prototype.init = function(){
    var button = document.createElement('button');
    button.innerHTML = '开'
    this.button = document.body.appendChild(button)
    this.button.addEventListener('click',e=>{
        console.log('按了开关');
        this.buttonPressed()
    })
}

Light.prototype.buttonPressed = function(){
    if(this.state == 'off'){
        console.log('开灯');
        this.state = 'on'
        this.button.innerText = '关'
    }else{
        console.log('关灯');
        this.state = 'off'
        this.button.innerText = '开'
    }
}