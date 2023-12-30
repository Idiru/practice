import { percentageNoYes, namesYes, averageAge } from './surveyUtils.mjs';


const surveys = [
    { id: 1, name: "Alice", age: 25, response: "Yes" },
    { id: 2, name: "Bob", age: 30, response: "No" },
    { id: 3, name: "Charlie", age: 28, response: "Yes" },
    { id: 4, name: "Diana", age: 22, response: "Yes" },
    { id: 5, name: "Evan", age: 35, response: "No" }
];


function analyzeSurveys(array) {

    return `
    Yes(${percentageNoYes(array)[0].yes}%)/No(${percentageNoYes(array)[0].no}%)
    People who have voted "Yes" = ${namesYes(array)}
    Average age of all people = ${averageAge(array)}
    `

}

//console.log(percentageNoYes(surveys));
console.log(analyzeSurveys(surveys));