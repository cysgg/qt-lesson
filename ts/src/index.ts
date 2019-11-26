function greeter (person: String) {
  return function abc (person: String) {

  }
}

const  user = 'wn'

greeter(user)
function warnUser (): void {
  alert('test')
}

const c: void = undefined
let u:undefined = undefined
let n:null = null

// const sym1 = Symbol('key1')
// const sym2 = Symbol('key2')

// const max:number = Number.MAX_VALUE

// declare let foo: number
// declare let bar: bigint
// foo === bar false

// any
// unknown
// nerver
// object
// let notSure:any = 4
// notSure = '4'
// notSure.foo.bar = 1
// let value:unknown = 4
// value = '4'
// value.foo.bar = 1
// value()
// new value()
// value[0][1]

// function error(message: string): never {
//   throw new Error(message)
// }

// const empty: never[] = []
// const obj: object = {}

// const list: Array<number> = [1, 2, 3] // 反省
// const list2: number[] = [1, 2, 3] // 反省

// // 元组
// let x: [string, number]
// x = ['hello', 10]

// object
enum Direction {
  center = 1
}
let val: object
val = Direction
// val = [1]
// val = [1, 'hello']
console.log(val)
enum Direction {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right'
}

console.log(Direction['right'], Direction.up)

// 接口 interface
interface User {
  name: string,
  age: number,
  readonly isMale: boolean,
  say: (words: string) => string
}

const getUserName = (user: User) => user.name
// user.say = function (word: string) {}

interface Config {
  width?: number
  [propName: string]: any // 添加字符串索引签名
}

function CalculateAreas (config: Config): {area: number} {
  let square = 100
  if (config.width) {
    square = config.width * config.width
  }
  return {area: square}
}

// 类型断言
let mySquare = CalculateAreas({widdth: 5} as Config)
let options = {widdth: 5}

let mySquare1 = CalculateAreas(options)

// 类 class
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('ao ao ao ao');
  }
}

// 需要实例化抽象类 需要创建子类来继承基类， 可以实例化子类
// const animal = new Animal()
class Cat extends Animal {
  makeSound() {
    console.log('miao miao miao')
  }
}

const cat = new Cat()
cat.makeSound()
cat.move()

// public private protected
class Car {
  protected run () {
    console.log('启动')
  }
}

const car = new Car()
// car.run()
class GTR extends Car {
  init () {
    this.run()
  }
}