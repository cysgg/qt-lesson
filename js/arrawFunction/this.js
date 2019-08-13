var lileiname = '123'
var obj = {
    lileiname : '456'
}
function lilei() {
    var liLeiFun = () => {
        console.log(this.lileiname);
    }
    liLeiFun()
}
lilei()