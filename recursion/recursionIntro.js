//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
let loopToZero = n => {
    while (n !== 0) {
        n--;
    }
    return "Success!";
}
//2. Next, try looping just like above except using recursion
let recurseToZero = n => {
    if (n === 0) {
        return "Success";
    }
    return recurseToZero(n - 1);
}
//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
let exponent = (base, expo) => {
    let totalVal = base;
    while (expo > 1) {
        totalVal *= base
        expo--;
    }
    return totalVal;
}
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
let recursiveExponent = (base, expo) => {
    if (expo === 0) {
        return 1;
    }
    return base *= recursiveExponent(base, expo - 1);
}
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
//let recursiveMultiplier = (arr, num) => {
//    if (arr.length == 0) {
//        return 1;
//    }
//    let maxIndex = arr.length - 1;
//    num *= arr[maxIndex];
//    arr.splice(maxIndex, 1);
//    return recursiveMultiplier(arr, num);
//}
//recursiveMultiplier([1, 2], 1)
//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse