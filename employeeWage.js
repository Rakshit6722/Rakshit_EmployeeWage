//UC1
// const random = Math.floor(Math.random()*2);

// if(random === 1){
//     console.log("Employee is present");
// }else{
//     console.log("Employee is absent");
// }

//UC2
// const random = Math.floor(Math.random()*3)+1;
// let wage
// switch(random){
//     case 1:
//         wage = 8*20;
//         break;
//     case 2:
//         wage = 4*20;
//         break;
//     default:
//         wage = 0;
//         break;
// }

// console.log("Employee wage is: "+wage);

//UC3
// const workHours = () => {
//     const random = Math.floor(Math.random()*3)+1;
//     let hours
//     switch(random){
//         case 1:
//             hours = 8;
//             break;
//         case 2:
//             hours = 4;
//             break;
//         default:
//             hours = 0;
//             break;
//     }
//     return `${hours} working hours`;
// }

// const workingHours = workHours()
// console.log(workingHours)

//UC4
const getMonthlyWage = () => {
    const random = Math.floor(Math.random()*3)+1;
    let monthlyWage
    switch(random){
        case 1:
            monthlyWage = 8*20*20;
            break;
        case 2:
            monthlyWage = 4*20*20;
            break;
        default:
            monthlyWage = 0;
            break;
    }
    return monthlyWage;
}

const monthlyWage = getMonthlyWage()
console.log("Monthly wage is: "+monthlyWage)

