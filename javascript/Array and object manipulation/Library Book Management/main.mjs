const library = [
    { id: 1, title: "The Little Prince", author: "Antoine de Saint-Exupéry", year: 1943 },
    { id: 2, title: "1984", author: "George Orwell", year: 1949 },
    { id: 3, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { id: 4, title: "Father Goriot", author: "Honoré de Balzac", year: 1835 },
    { id: 5, title: "Moby Dick", author: "Herman Melville", year: 1851 }
];


function idSearch (array, id) {
    let result = array.filter(item => item.id === id)
    return result.map(item => item.title)
}

function authorSearch (array, author) {
    let result = array.filter(item => item.author === author)
    
    if (result === undefined) {
        return "No author found"
    }

    else {
        return result.map(item => item.title)
    }
}

function dateRangeSearch (array, date) {
    let filterBooks = array.filter(item => item.year < date)
    let result = filterBooks.map(item => item.title)
    
    if (result.length < 1) {
        return result
    }

    else {
        "No books found"

    }

    
}

function addBook (array && title && author && year) {

    if(array, title, author, year) {
        array.push({
            id: array.length + 1,
            title: title,
            author: author,
            year: year
        })
    
        return array

    }

    else {
        return "Please provide all informations needed"
    }
}

export function deleteBook (array, id) {

    
    return array.filter(item => item.id !== id)
}


console.log("Search by ID: " + idSearch(library, 1))
console.log("Search by author: " + authorSearch(library, "Honoré de Balzac"))
console.log("Search by date range: " + dateRangeSearch(library, 1950))
console.log("Add a book: " + addBook(library, "The stranger", "Albert Camus", 1942))
console.log("Remove a book: " + deleteBook(library, 10))



