let namelist = ['小可爱','小坏蛋']
let value = ['晚上一起跳广场舞','晚上一起恰鸡']
$('#msg').click(()=>{
    let oneli = $('#send').clone()
    oneli.find('.name').html(namelist[Math.round(Math.random())])
    oneli.find('.detail').html(value[Math.round(Math.random())])
    $('#sendul').append(oneli)
})