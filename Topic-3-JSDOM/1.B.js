let daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day, num;
const inputDay = () => {
    let condition = 0;
    while (condition === 0){
        day = prompt("Insert a day");
        let indexDay = daysWeek.indexOf(day);
        if (indexDay < 0 || indexDay > 6){
            alert("Try Again, beware, case sensitive");
        }
        else {
            condition = 1;
        }
    }
}
const inputNumber = () => {
    let condition = 0
    while (condition === 0){
        num = Number(prompt("Insert a number"));
        if (num < 1 || num > 7){
            alert("Try Again, invalid range");
        }
        else {
            condition = 1;
        }
    }
}
const getDayAfter = () => {
    let indexDay = daysWeek.indexOf(day);
    if ((indexDay + num) > 6){
        alert(daysWeek[indexDay + num - 7]);
    } else {
        alert(daysWeek[indexDay + num]);
    }
}

inputDay();
inputNumber();
getDayAfter();