# Javascript Review 1

This assignment will help you review some of the concepts that you learned in the Basic JavaScript course on [FreeCodeCamp.com](http://FreeCodeCamp.com). 

## Scenario Instructions

You will develop an application that tracks to-do list items and supports the creation or deletion of them. You will only be working in the `index.js` file and in the Terminal to complete the project. You are looking to get all tests to pass when running `npm test` in the Terminal. 

As you work, make sure to comment your code to describe the changes you’re making. 

## Concepts

The assignment will cover the following concepts: 

- Writing comments
- Declaring variables
- Variable scope
- Using strings, escaping quotes, string concatenation, using the .length() method
- Compound Assignment
- Bracket Notation
- Arrays, multi-dimensional arrays, using array methods
- Functions
- Using If/else
- Comparisons and Truthiness

## Installation

### Prerequisites

To install this lesson, you will need to make sure you have the following installed on your computer:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/) or [Bun](https://bun.sh/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Download and Install

1. Fork this repository in GitHub so you don’t make changes to the master branch. 
2. Using the green Code button at the top of this repository, download the code for this lesson through your favorite method. 
3. Open the folder for this project in your code editor and a Terminal window at the folder location.
4. In your Terminal, use Node Package Manager to install the dependencies listed in the `package.json` file. 

> Installation with Node Package Manager
> 

```jsx
npm install
```

## Testing and Completion

This app uses Live Server to refresh to your changes and show 

This application uses Jest to test your code to ensure that your code works as intended. To test your code, run the following command in the Terminal:

```jsx
npm test
```

Jest will test your code and throw an error if the test fails. Here are the test conditions: 

√ Task 1: Successfully push the task to the end of the To-Do list.

√ Task 1: Return the TASK_ADDED message.

√ Task 2: Return the TODO_LENGTH message with the TO_DOS length at the end.

√ Task 3: Successfully removed first item from the array.

√ Task 3: Return confirmation message with completed task at the end.

√ Task 4: Passing a negative number to getTask() returns the error message.

√ Task 4: Passing a number to getTask() that's too big returns the error message

√ Task 4: Passing 0 to getTask() returns the error message.

√ Task 4: Passing 1 to getTask() returns the first task.

√ Task 4: Passing a valid number to getTask() returns the associated task.