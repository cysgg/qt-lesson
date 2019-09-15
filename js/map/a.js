const dogs = new Map()
dogs.set('Snickers',3)
dogs.set('Sunny',2)
dogs.set('Hugo',10)

dogs.forEach((v,i) => {
  console.log(v,i);
})