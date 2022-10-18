// function allStudentsGrades(val){
// const whatGrade = ""
// switch(val){
//     case "A":
//         whatGrade = "A"
//         alert(`${whatGrade} is between 80 - 100 : A`)
//         break

//     case "B":
//         whatGrade = "B"
//         alert(`${whatGrade} is between 70 - 89 : B`)
//         break

//     case "C":
//         whatGrade = "C"
//         alert(`${whatGrade} is between is 60 - 69 : C`)
//         break

//     case "D":
//         whatGrade = "D"
//         alert(`${whatGrade} is between is 50 - 59 : D`)
//         break

//     case "F":
//         whatGrade = "F"
//         alert(`${whatGrade} is between is 0 - 49 : F`)
//         break
//     }

//     return whatGrade
// }

// allStudentsGrades("C")

function checkSeasons(val){
    const whatSeason = prompt("What Season is it?:")
    switch(val){
        case "Autumn":
            whatSeason = "Autumn"
            alert(` September, October or November, the season is ${whatSeason}.`)
            break

        case "Winter":
            whatSeason = "Winter"
            alert(`December, January or February, the season is ${whatSeason}.`)
            break

        case "Spring":
            whatSeason = "Spring"
            alert(`March, April or May, the season is ${whatSeason}.`)
            break

        case "Summer":
            whatSeason = "Summer"
            alert(`une, July or August, the season is ${whatSeason}.`)
            break
    }

    return whatSeason
}

checkSeasons()