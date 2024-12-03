//UC1
// const random = Math.floor(Math.random()*2);

// if(random === 1){
//     console.log("Employee is present");
// }else{
//     console.log("Employee is absent");
// }

//UC2
const random = Math.floor(Math.random()*3)+1;
let wage
switch(random){
    case 1:
        wage = 8*20;
        break;
    case 2:
        wage = 4*20;
        break;
    default:
        wage = 0;
        break;
}

console.log("Employee wage is: "+wage);

