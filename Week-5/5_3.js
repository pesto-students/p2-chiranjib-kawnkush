function hasDuplicate(array){
 
    var setData = new Set();
    for(var x of array){
        setData.add(x);
    }
    if(array.length >setData.size){
        
       // console.log("has Duplicate");
        return true;
    }
    
    return false;
}
console.log(hasDuplicate([1,2,3,4,5,6,7,7]));