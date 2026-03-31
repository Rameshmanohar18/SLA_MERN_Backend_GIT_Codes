const user = {
    name:"react",
    address:{city:"chennai"}
}

console.log('original object',user);

const usercope = {...user}


// console.log('copy object',usercope);

// usercope.address.city = "Madurai"

// console.log(usercope.address.city);


console.log('original object before',user);


user.name = "Node"

console.log('original object after',user);