export function rubricPassFail(score) {
    if (score >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}


// const diana = rubricPassFail(6);
// console.log(diana);




// A teacher wants to create a rubric for grading students based on a score from 0 to 11.
// * A student passes if they have a score greater than or equal to 5. Export a function that returns "Pass" or "Fail".