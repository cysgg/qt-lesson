function Find(target, array)
{
    // write code here
    for(item of array){
        if(item[item.length-1] >= target){
            for(i of item){
                console.log(i);
                
                if(i == target)
                    return true
            }
        }
    }
    return false;
}
console.log(Find(15,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));
