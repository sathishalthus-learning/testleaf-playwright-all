const nums =[2,4,5,2,1,2];
let count=0;
const searchValue=2;
nums.forEach(num=>{
    if(num===searchValue){
        count=count+1
    }
})
console.log(count);