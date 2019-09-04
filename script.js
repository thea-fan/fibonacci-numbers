
//*********************** Returns the nth number of fibo sequence
function fibNum(n) {
    var myArr = [];
    var result;

    for (var i = 0; i < n+1; i++) {
        if(i < 3) {
            myArr.push(i);
            result = 1
        } else {
            myArr.push(myArr[i-2] + myArr[i-1]);
            result = myArr[n-1]
        }
    }
    return result;
}

fibArr(8); //returns [21]


//*********************** Returns the array of fibo sequence up to nth number
function fibArr(n) {
    var myArr = [];

    for (var i = 0; i < n+1; i++) {
        if(i < 2) {
            myArr.push(i);
        } else {
            myArr.push(myArr[i-2] + myArr[i-1]);
        }
    }
    myArr.shift();
    return myArr;
}

fibArr(8); //returns [1, 1, 2, 3, 5, 8, 13, 21]


//*********************** Returns the result of nth number or array of fibo sequence up to nth number by a boolean second parameter
function fibonacci(n, returnList) {
    var myArr = [];
    var result;

    if (returnList === true) {
        for (var i = 0; i < n+1; i++) {
            if(i < 2) {
                myArr.push(i);
            } else {
                myArr.push(myArr[i-2] + myArr[i-1]);
            }
        }
        myArr.shift();
        return myArr;


    } else if (returnList === false){
        for (var i = 0; i < n+1; i++) {
            if(i < 3) {
                myArr.push(i);
                result = 1
            } else {
                myArr.push(myArr[i-2] + myArr[i-1]);
                result = myArr[n-1]
            }
        }
        return result;
    }
}

fibonacci(8,false) // returns 21
fibonacci(8,true) // returns [1, 1, 2, 3, 5, 8, 13, 21]