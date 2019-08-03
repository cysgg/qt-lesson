function Block() {
    this.upDivWrap = null,
    this.downDivWrap = null,
    this.downHeight = baseObj.randomNum(0,150)
    this.gapHeight = baseObj.randomNum(150,160)
    this.upHeight = 312 - this.downHeight - this.gapHeight;
    

    this.createDiv = (url,height,positionType,left,top)=>{
        var newDiv = document.createElement('div')
        newDiv.style.width = '62px'
        newDiv.style.height = height + 'px'
        newDiv.style.position = positionType
        newDiv.style.left = left + 'px'
        newDiv.style.top = top + 'px'
        newDiv.style.backgroundImage = url
        return newDiv
    }

    this.createBlock = function(){
        var upDiv1 = this.createDiv('url(./img/up_mod.png',this.upHeight)
        var upDiv2 = this.createDiv('url(./img/up_pipe.png',60)
        this.upDivWrap = this.createDiv(null,null,'absolute',450)
        this.upDivWrap.appendChild(upDiv1)
        this.upDivWrap.appendChild(upDiv2)

        var downDiv1 = this.createDiv('url(./img/down_pipe.png',60)
        var downDiv2 = this.createDiv('url(./img/down_mod.png',this.downHeight)
        this.downDivWrap = this.createDiv(null,null,'absolute',450,363-this.downHeight)
        this.downDivWrap.appendChild(downDiv1)
        this.downDivWrap.appendChild(downDiv2)

        jsWrapBg.appendChild(this.upDivWrap)
        jsWrapBg.appendChild(this.downDivWrap)
    }

    this.moveBlock = function(){
        this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px'
        this.downDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px'
    }
}