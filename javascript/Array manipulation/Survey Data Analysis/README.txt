Exercise: Survey Data Analysis
Context: You are working on a survey application and receive data as an array of objects. Each object represents a survey response with various details.

Objective: Write a JavaScript function to analyze this data and provide useful statistics.

Sample Data:

javascript
Copy code
const surveys = [
    { id: 1, name: "Alice", age: 25, response: "Yes" },
    { id: 2, name: "Bob", age: 30, response: "No" },
    { id: 3, name: "Charlie", age: 28, response: "Yes" },
    { id: 4, name: "Diana", age: 22, response: "Yes" },
    { id: 5, name: "Evan", age: 35, response: "No" }
];

Tasks:

1. Calculate the percentage of "Yes" and "No" responses.
2. Find the average age of the participants.
3. Create a new array containing only the names of participants who answered "Yes".

Hints:

Use array methods like .filter(), .map(), and .reduce().
Consider breaking the problem into smaller functions for clarity.
Expected Output:

An object or multiple values indicating the requested statistics.