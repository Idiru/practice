
// Function to calculate the percentage of "Yes" and "No"
export function percentageNoYes (array) {

    let totalNo = array.reduce((count, item) => { return item.response === "No" ? ++count : count}, 0) // Using of reduce() to count all "No"
    const percentageNo = (totalNo / array.length) * 100 // Caculation of the percentage of "No"
    
    const percentageYes = 100 - percentageNo // Caculation of the percentage of "Yes"

    return [{no: percentageNo, yes: percentageYes}] // Returning of an array with both value
}

// Function to calculate return an array with the names of people who have voted "Yes"
export function namesYes (array) {
    const names = array.filter(item => item.response === "Yes").map(item => item.name) // Using of filter() to isolate the people who voted "Yes", then using of map() to create a new array which returns only the names
    
    return names
}


// Function to calculate the average age of the participants 
export function averageAge (array) {
    const sumAge = (array.reduce((total, current) => total + current.age, 0)) // Using of reduce() to focus on the age and to sum all items
    const meanAge = sumAge / array.length // Division by total of items

    return meanAge
}
