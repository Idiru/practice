const surveys = [
    { id: 1, name: "Alice", age: 25, response: "Yes" },
    { id: 2, name: "Bob", age: 30, response: "No" },
    { id: 3, name: "Charlie", age: 28, response: "Yes" },
    { id: 4, name: "Diana", age: 22, response: "Yes" },
    { id: 5, name: "Evan", age: 35, response: "No" }
];

const numbers = [1, 2, 3, 4, 5];


function analyzeSurveys(array) {
    const noPercentage = reparitionNo(array);


    return `
    Yes(${100-noPercentage}%)/No(${noPercentage}%)
    People who have voted "Yes" = ${namesYes(array)}
    Average age of all people = ${averageAge(array)}
    `

}


function reparitionNo (array) {

    const filterNo = array.filter(array => array.response === "No")
    const sumNo = filterNo.length

    const percentageNo = sumNo / array.length * 100

    return percentageNo
}

function namesYes (array) {
    const names = array.filter(item => item.response === "Yes").map(item => item.name)
    
    return names
}


function averageAge (array) {
    const sumAge = (array.reduce((total, current) => total + current.age, 0))
    const meanAge = sumAge / array.length

    return meanAge
}


console.log(analyzeSurveys(surveys));