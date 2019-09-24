// 石头剪刀布
// - 接受参数怎么办
//   input IO
var playerAction = process.argv[2]
console.log(playerAction);
if (playerAction != 'rock' && playerAction != 'paper' && playerAction != 'scissor') {
  console.log('请输入rock或paper或scissor');
} else {
  var computerAction;
  var random = Math.random() * 3
  if (random < 1) {
    computerAction = 'rock';
    console.log('电脑出了石头');
  } else if ( random > 2) {
    computerAction = 'scissor'
    console.log('电脑出了剪刀');
  } else {
    computerAction = 'paper'
    console.log('电脑出了布');
  }
  // if ()
}