requirejs.config({
  path: {
    jq: './jq',
    swiper: './swiper'
  }
})

require(['jq'], jq => {
  document.getElementById('btn')
  .addEventListener('click', e => {
    require(['swiper'], swiper => {
      console.log(1)
    })
  })
})