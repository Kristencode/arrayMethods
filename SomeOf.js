let someOf = [21, 37, 41, 63, 30, 80, 11];

   
function check(element){
    return element %2 ==0
}

if(someOf.some(check)){
    console.log(`There is an even number`)
} else{
    console.log('there are no even number')
}

// someof test if any of the element passes the test implemented in the function.