/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let nums1=version1.split('.')
    let nums2 = version2.split('.')
    let len1 = nums1.length
    let len2 = nums2.length
    let len = Math.min(len1,len2)
    let i=0
    for(;i<len;i++){
        let a = parseInt(nums1[i])
        let b = parseInt(nums2[i])
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
    }

        while(i<len1){
            if(parseInt(nums1[i])>0)return 1
            i++
        }
    
        while(i<len2){
            if(parseInt(nums2[i])>0)return -1
            i++
        }
        return 0
};


var compareVersion = function(version1, version2) {
    let nums1=version1.split('.')
    let nums2 = version2.split('.')
    let len1 = nums1.length
    let len2 = nums2.length
    let len = Math.max(len1,len2)
    let i=0
    for(;i<len;i++){
        let a = i<len1?parseInt(nums1[i]):0
        let b = i<len2?parseInt(nums2[i]):0
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
    }

    return 0
};
