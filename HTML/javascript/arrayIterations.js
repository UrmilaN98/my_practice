let arr = ['orange', 'apple', 'mango', 'banana'];
let arr2 = [];
//iterations using normal for loop
for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 'apple') {
        arr2.push(arr[i])
    }
}
console.log(arr2);

//iterations using for each loop
let ar3=[];
arr.forEach(ele => {
    if(ele!='apple') {
        ar3.push(ele)
    }
}
    )
console.log(ar3);