;
/**
 * @func 就地编辑
 * @author CYS
 * 
 * 网站的基础类 不要重复造轮子
 * 不是具体业务，抽象的公共业务
 * 
 * @param {String} id 
 * @param {Element} parent
 * @param {String} initVal 
 */
function EditInPlace(id,parent,initVal){
    //constructor
    this.id = id;
    this.parentElement = parent;
    this.value = initVal || "default value"
    this.createElement(); //动态DOM
    this.attachEvents()
}

EditInPlace.prototype.attachEvents = function(){
    this.staticElement.addEventListener('click',()=>{
        console.log(this);
        this.covertToText();
    },false)
    this.fieldElement.addEventListener('keydown',()=>{
        if(event.keyCode == 13){
            this.staticElement.innerHTML = this.fieldElement.value;
            this.covertToEdit();
        }
    },false)
}

EditInPlace.prototype.createElement = function(){
    this.containerElement = document.createElement('div')
    this.containerElement.id = this.id
    this.staticElement = document.createElement('span');
    this.staticElement.innerText = this.value

    this.fieldElement = document.createElement('input')
    this.fieldElement.type = 'text'
    this.fieldElement.value = this.value
    this.containerElement.appendChild(this.fieldElement)

    this.containerElement.appendChild(this.staticElement)
    this.parentElement.appendChild(this.containerElement)

    this.covertToText();
}

EditInPlace.prototype.covertToText = function(){
    this.fieldElement.style.display = 'none';
    this.staticElement.style.display = 'inline';
}

EditInPlace.prototype.covertToEdit = function(){
    this.fieldElement.style.display = 'inline';
    this.staticElement.style.display = 'none';
}