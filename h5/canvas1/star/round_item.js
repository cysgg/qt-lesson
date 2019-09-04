/**
 * @author cysg
 * @desc 星星
 * 一个功能一个文件，一个类一个文件
 * 模块化多人协作
 * @param {*} index 
 * @param {*} x 
 * @param {*} y 
 * @param {*} cxk 
 */
function RoundItem(index,x,y,cxk){
    this.index =  index;
    this.x = x
    this.y = y
    this.cxk = cxk
    this.r = Math.random() * 2 + 1
    this.color = 'rgba(255,255,255,1)'
}

RoundItem.prototype.draw = function(){
    this.cxk.fillStyle = this.color;
    this.cxk.beginPath();
    this.cxk.arc(this.x,this.y,this.r,0,2*Math.PI,false)
    this.cxk.closePath();
    this.cxk.fill();
}

RoundItem.prototype.move = function(){
   this.x -= 1
}