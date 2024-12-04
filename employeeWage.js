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
const getWorkHours = () => {
    let workHours=0
    const isPresent = getAttendance()
    if (isPresent === 'Present') {
        const hours = Math.floor(Math.random() * 2) + 1
        switch (hours) {
            case 1:
                workHours = 8;
                break;
            case 2:
                workHours = 4;
                break;
            default:
                workHours = 0;
                break;
        }
    }else{
        workHours=0
    }

    return workHours
}

const workHours = getWorkHours()
console.log(workHours)







