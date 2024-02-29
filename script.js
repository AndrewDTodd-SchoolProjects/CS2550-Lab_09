// Put your solution here
function divideArray(numbers) {
    var evenNums = [];
    var oddNums = [];

    for(var i =0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            evenNums.push(numbers[i]);
        }
        else {
            oddNums.push(numbers[i]);
        }
    }

    evenNums.sort(function(a, b) {
        return a - b;
    });

    oddNums.sort(function(a, b) {
        return a - b;
    });

    console.log("Even numbers:")
    if(evenNums.length > 0) {
        evenNums.forEach(function(element) {
            console.log(element);
        });
    }
    else {
        console.log("None");
    }

    console.log("Odd numbers:");
    if(oddNums.length > 0) {
        oddNums.forEach(function(element) {
            console.log(element);
        });
    }
    else {
        console.log("None");
    }
}