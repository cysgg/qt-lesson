function ListNode(val){
    this.val = val;
    this.next = null;
}

let l1 = [2,4,3,9]
    l2 = [5,6,4,1]

var addTwoNumbers = function(l1, l2) {

    if(!l1){
        return l2;
    }else if(!l2){
        return l1;
    }
    //将val值都提取出来放入数组
    var arr1=[],arr2=[];


    while(l1){
        arr1.push(l1.val);
        l1=l1.next;
    }
    while(l2){
        arr2.push(l2.val);
        l2=l2.next;
    }
    
    var addArray =function(l1,l2){
        let newlist = []
        let len = Math.max(l1.length,l2.length)
        let a,b = 0
        for(let i = 0; i < len; i++){
            l1[i] = l1[i] || 0
            l2[i] = l2[i] || 0
            let sum = l1[i] + l2[i] + b
            b = 0
            a = sum % 10
            b = parseInt(sum / 10)
            newlist.push(a)
        }
        if(b > 0)
            newlist.push(b)
        return newlist
    }

    var result=addArray(arr1,arr2);
    
    var node={
        val:null,
        next:null
    },
        head=node;
    for(i=0;i<result.length;i++){
        node.next={
            val:result[i],
            next:null
        }
        node=node.next;
    }
    return head.next; 
};

console.log(addTwoNumbers(l1,l2));
