// const add = (a,b)=>{

// return a+b

// }

// console.log(add(3,6));


// callback injection

// const calculate = (a,b,opration) =>{


//     return opration(a, b)

// }

// const add = (x,y)=> x+y
// const sub = (x,y)=> x*y

// console.log(calculate(3,5,(x,y)=>{x+y}));
// console.log(calculate(3,5,sub));



// const intro = (name,cb)=>{

//    return cb(name)

// }

// const data = (a)=> a

// console.log(intro("react",data));



// const datanew = (x,y,z)=>{


//     return x(y,z)

// }


// const datas = (a,b)=> a**b


// console.log(datanew(datas,3,8));

// Array Callback methods using for map 

// const processArray = (arr,callback)=>{
    
//     const result = []
   
//     for(let i = 0; i < arr.length; i++){

//         result.push(callback(arr[i]))

//     }
 

//     return result
    
// }

// const squre = (num)=>num*num 


// console.log(processArray([1,2,3,4],squre));



// Validation callback


// const validation = (value,rule) => rule(value);


// const isPositive = (num)=> num > 0 

// const isEven = (num)=> num % 2===0 



// console.log(validation(10,isPositive));
// console.log(validation(10,isEven));




// setTimeout(()=>{
//     console.log(validation(10,isPositive));
// },2000)




// const settimeout = (cbf,t)=>{  
//     for(let i = 0; i < t; i++){
//         console.log('this');
        
//     }
//     return cbf(t)   
// }


// const add = (data)=>(data);


// console.log(settimeout(add,2000));



// setTimeout(()=>{},3000)