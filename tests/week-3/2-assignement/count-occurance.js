// count occurance of a specific element in array

// function
function getOccurance(nums, element)
{
    var occuranceValue=0;
    for(let i=0; i< nums.length;i++){
        if(nums[i] === element) {
            occuranceValue = occuranceValue+1;
        }
    }
    console.log(`${element} is occured ${occuranceValue} times`);
}

getOccurance([2,4,5,2,1,2],2);


