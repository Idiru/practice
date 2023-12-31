Exercise: Library Book Management

Context: You are working on an application for a library that manages a collection of books. Each book is represented by an object containing various details.

Objective: Write JavaScript functions to manage and query the book collection.

Sample Data:
const library = [
    { id: 1, title: "The Little Prince", author: "Antoine de Saint-Exupéry", year: 1943 },
    { id: 2, title: "1984", author: "George Orwell", year: 1949 },
    { id: 3, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { id: 4, title: "Father Goriot", author: "Honoré de Balzac", year: 1835 },
    { id: 5, title: "Moby Dick", author: "Herman Melville", year: 1851 }
];

Tasks to Perform:
1. Find a Book by its ID: Write a function that takes an ID as an argument and returns the corresponding book.

2. Filter Books by Author: Write a function that takes the name of an author and returns all books by that author.

3. Get a List of Books Published Before 1950: Write a function that returns all books published before 1950.

4. Add a New Book: Write a function to add a new book to the collection.

5. Delete a Book by its ID: Write a function that takes an ID as an argument and removes the corresponding book from the collection.

Tips:
Use array methods like find, filter, push, and splice.
Consider handling cases where the book is not found in the search and delete functions.
