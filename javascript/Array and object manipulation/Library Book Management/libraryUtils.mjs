export function idSearch(array, id) {
    let result = array.filter(item => item.id === id)
    return result.map(item => item.title)
}

export function authorSearch(array, author) {
    let result = array.filter(item => item.author === author)
    return result.map(item => item.title)
}

export function dateRangeSearch(array, date) {
    let result = array.filter(item => item.year < date)
    return result.map(item => item.title)
}

export function addBook (array, title, author, year) {
    array.push({
        id: array.length + 1,
        title: title,
        author: author,
        year: year
    })

    return array
}

export function deleteBook (array, id) {
    return array.filter(item => item.id !== id)
}