let filterNo = [20, 60, 40, 80, 45, 70, 30];

filterNo.filter( function(item ){
    if (item > 50){
        console.log(item)
    }

})

// Filter() array object is used to sort items when a particular fixed parameter is met or if items me a particular specifications..Say from the above example: Items less than 50 is sorted and returned.