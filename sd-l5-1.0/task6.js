export function rubricExcellent(score) {
    if (score > 8) {
        return "Excellent";
    } else if (score >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
   
}

// const diana = rubricExcellent(11);
// console.log(diana);


// A teacher also wants to mark students who get a high score of 9 or more.
//     * Extend the function so that it returns "Excellent" for scores greater than 8.