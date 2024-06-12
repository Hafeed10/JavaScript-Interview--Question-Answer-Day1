
// helloworld printing function Qusthin
// var createHelloWorld = function () {
//     return function (...args) {

//     }
// }

// const f = createHelloWorld();



// Answer


// Boost Your JavaScript Problem - Solving Skills with Daily LeetCode Challenges! | Leet Code
var createHelloWorld = function () {
    return function (...args) {
        return "HelloWorld"
    }
}

const f = createHelloWorld();
console.log(f());

// Boost Your JavaScript Problem - Solving Skills with Daily LeetCode Challenges! | Leet Code 