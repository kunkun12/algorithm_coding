/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = []
    this.data=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.min.length===0){
        this.min.push(x)
    }else{
        let min = this.min[this.min.length-1]
        if(min>x){
            this.min.push(x)
        }else{
            this.min.push(min)
        }
    }
    this.data.push(x)

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.data.pop()
    this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};

