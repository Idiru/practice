const library = [
    { id: 1, title: "The Little Prince", author: "Antoine de Saint-Exupéry", year: 1943 },
    { id: 2, title: "1984", author: "George Orwell", year: 1949 },
    { id: 3, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { id: 4, title: "Father Goriot", author: "Honoré de Balzac", year: 1835 },
    { id: 5, title: "Moby Dick", author: "Herman Melville", year: 1851 }
];

// Search a book by ID
function idSearch (array, id) {
    let result = array.filter(item => item.id === id) // Filter the object with the right ID 

    if (result.length === 0){ //If the ID does not exist, error message
        return "This ID does not exist"
    }

    else {
        return result.map(item => item.title) // Creation of a new array with the title of the book
    }
}

// Find a book by author
function authorSearch (array, author) {
    let result = array.filter(item => item.author === author) // Filter the object by author
    
    if (result.length === 0) { // If the author does not exist, error message
        return "No author found"
    }

    else {
        return result.map(item => item.title) // Else creation of a new array with the right book title
    }
}

// Find books by date range
function dateRangeSearch (array, date) {
    let filterBooks = array.filter(item => item.year < date) // Filter the object by date range
    
    if (filterBooks.length === 0) { // Error message if no books found
        return "No books found"
    }

    else {
       return filterBooks.map(item => item.title) // Else, display all books found

    }

    
}

function formatBookInfo(book) {
    return `${book.id}: "${book.title}" by ${book.author}, published in ${book.year}`;
}


// Add a book in the list
function addBook (array, title, author, year) {

    if(array && title && author && year) { // Check if all data are provided
        array.push({
            id: array.length + 1,
            title: title,
            author: author,
            year: year
        })
    
        return

    }

    else { // Error message if data are missing 
        return "Please provide all informations needed"
    }
}

// Delete a book in the list
function deleteBook (array, id) {

    if (id < 1 || id > array.length) { // If the ID does not exist, error message
        return "This ID doesn not exist"
    }

    else { // Else, display the new book list 
        return array.filter(item => item.id !== id)
    }
}


// console.log("Search by ID: " + idSearch(library, 10))
// console.log("Search by author: " + authorSearch(library, "Honor de Balzac"))
// console.log("Search by date range: " + dateRangeSearch(library, 1950))
console.log("Add a book: " + addBook(library, "The stranger", "Albert Camus", 1942))
console.log("Remove a book: " + deleteBook(library, 10))



