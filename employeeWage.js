//UC1
const getAttendance = () => {
    const random = Math.floor(Math.random() * 2);
    return random === 1 ? 'Present' : 'Absent';
}
//UC2
// const FULL_TIME = 8;
// const PART_TIME = 4;
// const WAGE_PER_HOUR = 20;

// const isPresent = getAttendance()

// let workHours
// let dailyWage=0

// if(isPresent === 'Present') {
//     const hours = Math.floor(Math.random()*2)+1
//     switch(hours) {
//         case 1:
//             workHours = FULL_TIME;
//             dailyWage = FULL_TIME * WAGE_PER_HOUR;
//             break;
//         case 2:
//             workHours = PART_TIME;
//             dailyWage = PART_TIME * WAGE_PER_HOUR;
//             break;
//         default:
//             workHours = 0;
//             dailyWage = 0;
//             break;

//     }
// }
// console.log(dailyWage)

//UC3 - Refactoring UC2 to get workHours
const getWorkHoursAndWage = () => {
    const FULL_TIME = 8;
    const PART_TIME = 4;
    const WAGE_PER_HOUR = 20;

    let workHours = 0
    let dailyWage = 0
    const isPresent = getAttendance()
    if (isPresent === 'Present') {
        const hours = Math.floor(Math.random() * 2) + 1
        switch (hours) {
            case 1:
                workHours = FULL_TIME;
                dailyWage = FULL_TIME * WAGE_PER_HOUR;
                break;
            case 2:
                workHours = PART_TIME;
                dailyWage = PART_TIME * WAGE_PER_HOUR;
                break;
            default:
                workHours = 0;
                dailyWage = 0;
                break;
        }
    } else {
        workHours = 0
    }

    return {workHours, dailyWage}
}

// const workHours = getWorkHoursAndWage()
// console.log(workHours.workHours)

//UC4
// const monthlyWages = () => {
//     const TOTAL_WORKING_DAYS = 20;
//     let currentDay = 0;
//     let totalMonthlyWage = 0;
//     for (currentDay = 0; currentDay < TOTAL_WORKING_DAYS; currentDay++) {
//         const currentAttendance = getAttendance()
//         if(currentAttendance === 'Present') {
//             const workHours = getWorkHoursAndWage()
//             totalMonthlyWage += workHours.dailyWage
//         }else{
//             totalMonthlyWage += 0
//         }
//     }
//     return totalMonthlyWage

// }

// const totalMonthlyWages = monthlyWages()
// console.log(totalMonthlyWages)

//UC5
const monthlyWages = () => {
    const TOTAL_WORKING_DAYS = 20;
    const TOTAL_WORKING_HOURS = 160;
    let currentDay = 0;
    let currentHour = 0;
    let totalMonthlyWage = 0;
    
    while(currentDay < TOTAL_WORKING_DAYS && currentHour < TOTAL_WORKING_HOURS) {
        const currentAttendance = getAttendance()
        if(currentAttendance === 'Present') {
            const workHours = getWorkHoursAndWage()
            totalMonthlyWage += workHours.dailyWage
            currentHour += workHours.workHours
        }else{
            totalMonthlyWage += 0
        }
        currentDay++
    }

    return totalMonthlyWage
}

const monthlyWage = monthlyWages()
console.log(monthlyWage)

