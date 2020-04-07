EX_1

function getfullodd(num){
	let lastdigit=num%10;
	let currentnum;
  	if(lastdigit%2===0){
    	return false;
 	}
  	currentnum=((num-lastdigit)/10);
  	if (currentnum!==0){
    	return getfullodd(currentnum);
  	}
  	return true;
}
getfullodd(4211133);
		 //7791
		 //5



EX_2

function getminposit(arr){
	let positives=arr.filter(item=>item>=0);
	if(positives.length===0){
    	return -1;
  	}
  	let min=positives[0];
  	if(positives[0]<positives[1]){
    	positives[1]=positives[0];
  	}
  	if(positives[0]>positives[1]){
    	positives[0]=positives[1];
  	}
  	let removed=positives.splice(0,1);
  	if(positives.length!==0){
    	return getminposit(positives);
  	}
  	return min;
}
getminposit([56, -9, 87, -23, 0, -105, 55, 1]); 
          //[45, -9, 15, 5, -78] 
          //[-5, -9, -111, -1000, -7]



EX_3

function fibonacci(n){
  	let fib1=n-1;
  	let fib2=n-2;
  	if(fib1===0 || fib2===0){
    	return 1;
  	}
  	let fibN=fibonacci(fib1)+fibonacci(fib2);
  	return fibN;
	}

function rtrnFibonacciArray(num){
  	let result=[];
  	for(let i=1; i<=num; i++){
    	result.push(fibonacci(i))
  	}
  	return result;
}
rtrnFibonacciArray(10);
				 //0
				 //1
				 //2
				 //3


EX_4


function getarr(arr){
	let result=[];
	for(let item of arr){
    	if(typeof item!=='number'){
        	result=result.concat(getarr(item));
    	}
   		else{
      		result.push(item);
    	}
    }
	return result;
}
getarr([1, [3, 4, [1, 2]], 10]); 
     //[14, [1, [[[3, []]], 1], 0]]
     



EX_5

function getsum(num){
	num=num.toString().split("").map(Number).reduce((item1,item2)=>(item1+item2));
  	if(num>9){
    	return getsum(num);
  	}
  	return num;
}
getsum(14);
     //29
     //999999999999
