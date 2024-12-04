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
const monthlyWages = () => {
    const TOTAL_WORKING_DAYS = 20;
    let currentDay = 0;
    let totalMonthlyWage = 0;
    for (currentDay = 0; currentDay < TOTAL_WORKING_DAYS; currentDay++) {
        const currentAttendance = getAttendance()
        if(currentAttendance === 'Present') {
            const workHours = getWorkHoursAndWage()
            totalMonthlyWage += workHours.dailyWage
        }else{
            totalMonthlyWage += 0
        }
    }
    return totalMonthlyWage

}

const totalMonthlyWages = monthlyWages()
console.log(totalMonthlyWages)
        



//UC4
// const getMonthlyWage = () => {
//     const random = Math.floor(Math.random()*3)+1;
//     let monthlyWage
//     switch(random){
//         case 1:
//             monthlyWage = 8*20*20;
//             break;
//         case 2:
//             monthlyWage = 4*20*20;
//             break;
//         default:
//             monthlyWage = 0;
//             break;
//     }
//     return monthlyWage;
// }

// const monthlyWage = getMonthlyWage()
// console.log("Monthly wage is: "+monthlyWage)

//UC5
// const calculateWage = () => {
//     let currentWorkingHours = 0;
//     const totalWokringHours = 160;

//     let currentDays = 0;
//     const totalDays = 20;

//     let wages = 0

//     while(currentWorkingHours <= totalWokringHours && currentDays <= totalDays){
//         const random = Math.floor(Math.random()*3)+1;
//         let hours
//         switch(random){
//             case 1:
//                 hours = 8;
//                 wages += 8*20;
//                 break;
//             case 2:
//                 hours = 4;
//                 wages += 4*20;
//                 break;
//             default:
//                 hours = 0;
//                 wages += 0;
//                 break;
//         }
//         currentWorkingHours += hours;
//         currentDays++;
//     }

//     return wages
// }

// const totalWage = calculateWage()
// console.log("Total wage is: "+totalWage)





