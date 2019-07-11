/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map()
    this.keyArray = []
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let value = this.cache.get(key)
    if(typeof value !=='undefined'){
        let index = this.keyArray.indexOf(key)
        this.keyArray.splice(index,1)
        this.keyArray.unshift(key)
        return value
    }else{
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.get(key)){
        this.cache.set(key,value)
        let index = this.keyArray.indexOf(key)
        this.keyArray.splice(index,1)
        this.keyArray.unshift(key)
    }else{
        if(this.capacity==this.keyArray.length){
            let key = this.keyArray.pop()
            this.cache.delete(key)
        }
        this.keyArray.unshift(key)
        this.cache.set(key,value)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */