function Animal(planet){
    this.planet = planet
}

//constructor
// 原型对象 return {planet:}
Animal.prototype.getPlanet = function(){
    return this.planet
}

function Person(name){
    this.name = name
}
Person.prototype = new Animal('earth')
Person.prototype.getName = function(){
    return this.name
}

const person = new Person('三水清')
console.log(person.getPlanet());
console.log(person.getName());
console.log(Person.prototype.__proto__ === Animal.prototype);


