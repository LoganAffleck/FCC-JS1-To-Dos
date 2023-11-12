let data = require('./index');

//Task 1
test("Task 1: Successfully push the task to the end of the To-Do list", () => {
    expect(data.TO_DOS[data.TO_DOS.length-1]).toBe(data.task)
} )
test("Task 1: Return the TASK_ADDED message", () => {
    expect(data.addTask(data.task)).toBe(data.TASK_ADDED)
} )

//Task 2
test("Task 2: Return the TODO_LENGTH message with the TO_DOS length at the end.", () => {
    expect(data.getTodoLength()).toBe(data.TODO_LENGTH + data.TO_DOS.length)
} )

//Task 3
test("Task 3: Successfully removed first item from the array. ", () => {
    let task = data.TO_DOS[0]
    data.completeFirstTask();
    expect(data.TO_DOS.includes(task)).toBe(false)
} )

test("Task 3: Return confirmation message with completed task at the end. ", () => {
    let task = data.TO_DOS[0]
    expect(data.completeFirstTask()).toBe(data.COMPLETE_TASK+task)
} )

//Task 4
test("Task 4: Passing a negative number to getTask() returns the error message. ", () => {
    expect(data.getTask(-1)).toBe(data.ERROR_MESSAGE)
})

test("Task 4: Passing a number to getTask() that's too big returns the error message ", () => {
    expect(data.getTask(9000)).toBe(data.ERROR_MESSAGE)
})

test("Task 4: Passing 0 to getTask() returns the error message.", () => {
    expect(data.getTask(0)).toBe(data.ERROR_MESSAGE)
})

test("Task 4: Passing 1 to getTask() returns the first task.", () => {
    expect(data.getTask(1)).toBe(data.TO_DOS[0])
})

test("Task 4: Passing a valid number to getTask() returns the associated task.", () => {
    let listNum = 3
    expect(data.getTask(listNum)).toBe(data.TO_DOS[listNum-1])
})




