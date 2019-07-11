let Heap =require('./heap')


var MedianFinder = function() {
    this.minHeap= new Heap(true)
    this.maxHeap = new Heap(false)
    this.count=0
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.count++
    if(this.count%2===0){
        if(!this.maxHeap.isEmpty&&num<this.maxHeap.top){
            this.maxHeap.insert(num)
            num=this.maxHeap.extractTop()
        }
        this.minHeap.insert(num)
    }else{
        if(!this.minHeap.isEmpty&&num>this.minHeap.top){
            this.minHeap.insert(num)
            num=this.minHeap.extractTop()

        }
        this.maxHeap.insert(num)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let res
    if(this.count&1) {
        res= this.maxHeap.top
    }else{
        res= (this.maxHeap.top+this.minHeap.top)/2
    }
    return res
};

let finder= new MedianFinder()
finder.addNum(1)
finder.addNum(2)
finder.addNum(3)
console.log(finder.findMedian())