let word = prompt("Enter word: ")
let newWord = word.split("").join("-")
console.log(newWord);
alert(newWord);


//!!!

// let str = prompt("Enter str: ")
// let num = +prompt("Enter num: ")
// let result = str.slice(num)
// console.log(result);


alert("Undov Question:")
let str = prompt("Enter str: ")
let num = +prompt("Enter num: ") 

function removeStr(str, num) {
    let undov = 0 
    while (undov < str.length && str[undov] === "!" && num > 0){
        undov++
        num--
    }
    let result = str.slice(undov)
    let endUndov = 0
    while (endUndov < result.length && result[result.length - 1 - endUndov] === "!" && num > 0){
        endUndov++
        num--
    }
    result = result.slice(0, result.length - endUndov)
    return result
}
console.log(removeStr(str,num));





//MAth.questions
alert("Math Questions:")
let question = +prompt("How many questions do you want to solve: ")
let answerCorrect = 0

while (isNaN(question) || question == 0) {
    question = +prompt("NaN Enter another number: ")

} for (let i = 0; i < question; i++) {
    let ex1 = Math.floor(Math.random() * 10)
    let ex2 = Math.floor(Math.random() * 10)
    let operation = ['+', '-', '/', '*', '%'][Math.floor(Math.random() * 5)];
    

    let userAnswer = +prompt(ex1 + operation + ex2 + "?")
    let correctAnswer;

    if (operation === "+") {
        correctAnswer = ex1 + ex2
    } else if (operation === "-") {
        correctAnswer = ex1 - ex2
    } else if (operation === "*") {
        correctAnswer = ex1 * ex2
    }else if (operation === "/") {
        correctAnswer = ex1 / ex2
    }else if (operation === "%") {
        correctAnswer = ex1 % ex2
    }

    if (userAnswer === correctAnswer) {
        answerCorrect++
        console.log("Your answer is True " + userAnswer)
    } else {
        console.log("Your answer is False " + userAnswer + " True Answer is " + correctAnswer)
    }
}
console.log("You answered " + answerCorrect + " questions correctly.");