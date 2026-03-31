// let a = 10


// const add = () =>{

//    console.log('inside',a);

//    console.log('inside',a+1);
   
   

// }

// a = 12


// console.log('Outer',a);

// add()





const outer = ()=>{

  let count = 0;

  return ()=>{
 
    // count = count + 1 = 1+1 = 2
    count++

    return count

  }


}


const data = outer()


console.log(data());
console.log(data());
console.log(data());

console.log(count);

window.count = 12

console.log(count);
