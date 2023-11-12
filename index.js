// Please review the following variables, as you will use them in the tasks below. 

const TASK_ADDED = "The task has been added."
const TODO_LENGTH = "The task list is this long: "
const ERROR_MESSAGE = "There is no task at that number"
const COMPLETE_TASK = "The following task has been marked as complete: "
const TO_DOS = ["Wake Up", "Go Shopping", "Dance"]
let task = "Complete my homework"

// Instructions: 
// Run "npm install" before anything else. 
// As you write your code, ensure that you write comments frequently. 

// 🧪 To test your code, run "npm test" in the Terminal. 
// 👩‍💻 Feel free to console log as needed and run `node index` when you just want to see what you're logging.

// Task 1: 
// Write a function that uses an argument called "task". 
// Inside the function, push the "task" to the end of the TO_DOS array. 
// Use the TASK_ADDED constant to return a message saying the task has been added.

function addTask(task){
    //Write your code below this line. 

}

// Here's an example of how you can check if things are working 🤔. Run 'node index' if you aren't ready to test yet. 
console.log(addTask(task), TO_DOS);

// 😲 Feeling confident?? Run 'npm test' to see if you're passing the tests for Task 1 ~!

//----------------------------------------------------------

// Task 2: 
// Write a function called getTodoLength that returns the length of the TO_DOS list. 
// Use the TODO_LENGTH constant to return a message with the number of tasks concatenated to the end.

function getTodoLength(){

}

//----------------------------------------------------------

// Task 3: 
// Write a function called completeFirstTask that removes the first task from TO_DOS.
// Return a message that concatenates the text of the task you removed
// to the end of the constant variable called COMPLETE_TASK 




//----------------------------------------------------------

// Task 4: 

// This one is the hardest but YOU CAN DO IT I LOVE YOU 

// Write a function called getTask that returns the To-Do task at a given number.
// getTask() should accept an argument so that you can pass in a value. 
// Use the Number() function to check if the argument is a number. (Look this up if you need to!!)
// getTask() should return the constant variable called ERROR_MESSAGE if a task is not found at that number. 
// Make sure to account for negative numbers. 
// Make sure to account for the numbering differences between numbered lists and indexes. For example, 0 is not a valid list number.






// That's the end~! 

// This part makes your code available to the test file. If you are getting weird test results, make sure all variables and 
// functions are named according to the directions and match the names seen below. 

exports.TASK_ADDED = TASK_ADDED;
exports.TODO_LENGTH = TODO_LENGTH;
exports.ERROR_MESSAGE = ERROR_MESSAGE;
exports.COMPLETE_TASK = COMPLETE_TASK;
exports.TO_DOS = TO_DOS;

exports.task = task;

exports.addTask = addTask;
exports.getTodoLength = getTodoLength;
exports.completeFirstTask = completeFirstTask;
exports.getTask = getTask;