function vowelCount(data){
    var ch = Array.from(data);
    var countMap = new Map();
    var count = 0;
    for(var i=0;i<ch.length;i++){
   
        if(ch[i] ==='a' || ch[i]==='e' || ch[i]==='i' || ch[i]==='o' || ch[i]==='u' ){
            
            if(countMap.has(ch[i]) == true){
                countMap.set(ch[i],countMap.get(ch[i])+1);
                
            }else{
            
            count++;
            countMap.set(ch[i],count);
                
                
            }
            count = 0; 
    }
  
    }
    
    return countMap;
 
}


console.log(vowelCount("aeiouaeiouaeiouaei"));