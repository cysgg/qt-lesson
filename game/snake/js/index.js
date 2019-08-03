function hideWelcome() {
    document.querySelector('.welcome').style.display = 'none'
}

const loadAssets = (fn) => {
    setTimeout(()=>{
        fn()
    },1000)
}

document.addEventListener('DOMContentLoaded',()=>{
    console.log('页面渲染完成');
    
})

// 资源加载完成事件
window.onload = ()=>{
    console.log('window load ...');
    //加载完成后 hidewelcome
    loadAssets(hideWelcome)
    // hideWelcome();
}

