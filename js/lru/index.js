/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.arr = []
    this.obj = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(key in this.obj){
        this.resort(key)
        return this.obj[key]
    }
    return -1
};

LRUCache.prototype.resort = function(key){
    this.arr.splice(this.arr.indexOf(key),1);
    this.arr.push(key);
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    key in this.obj ? this.obj[key] = value : (this.arr.push(key),this.obj[key] = value)
    this.arr.length > this.capacity ? delete this.obj[this.arr.shift()] : null
    this.resort(key)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2)
obj.put(2,1)
obj.put(2,2)
console.log(obj.arr);
console.log(obj.obj);
console.log(obj.get(2))
obj.put(1,1)
obj.put(4,1)
obj.put(2,1)
obj.put(4,2)
console.log(obj.arr);
console.log(obj.obj);
console.log(obj.get(1))
// console.log(obj.arr);
