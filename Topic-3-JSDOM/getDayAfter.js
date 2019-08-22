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
        if (num < 0){
            alert("Try Again, invalid range");
        }
        else {
            condition = 1;
        }
    }
}
const getDayAfter = () => {
    let indexDay = daysWeek.indexOf(day);
    indexDay += num;
    indexDay = indexDay % 7;
    alert(num + " days after " + day + " is " + daysWeek[indexDay]);
}

inputDay();
inputNumber();
getDayAfter(); 