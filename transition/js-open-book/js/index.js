(
    function(win,doc){
        var prefixes = ['webkit','Moz','ms','o',''],
            book = doc.querySelector('.book'),
            page = doc.querySelectorAll('.front-cover')[0]
            dino = doc.querySelectorAll('.dino')[0],
            shadow = doc.querySelectorAll('.shadow')[0],
            hold = false,
            centerPoint = win.innerWidth / 2,
            pageSize = 300,
            clamp = function(val,min,max){
                return Math.max(min,Math.min(val,max))
            }
        
        //鼠标按下时执行的事件
        page.addEventListener('mousedown',(e)=>{
            hold = true
            
        })
        win.addEventListener('mouseup',(e)=>{
            if(hold){
                hold = false
            }
                
        })
        win.addEventListener('mousemove',(e)=>{
            if(!hold) return;
            
            let angle = clamp((centerPoint - e.pageX + pageSize)/pageSize * -90,-180,0),
                i,
                j;

            for(i = 0 , j = prefixes.length;i < j; i++){
                book.style[prefixes[i] + 'Transform'] = `rotateX(${60 + angle/8}deg)`
                page.style[prefixes[i] + 'Transform'] = `rotateY(${angle}deg)`
                dino.style[prefixes[i] + 'Transform'] = `rotateX(${angle/2}deg)`
                shadow.style[prefixes[i] + 'Transform'] = `translateZ(1px) skewX(${angle/8}deg)`
            }
            // page.style.tranfrom = 'rote'
            console.log(1);
            
            
        })
        win.addEventListener('resize',(e)=>{
            centerPoint = win.innerWidth / 2
        })
    }
)(window,document)