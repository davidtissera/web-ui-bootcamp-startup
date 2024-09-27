let daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let x; let y;

function inputDay(){
    let flag = 0;
    while (flag === 0){
        x = prompt("Insert a day");
        let indexDay = daysWeek.indexOf(x);
        if (indexDay < 0 || indexDay > 6){
            alert("Try Again, beware, case sensitive");
        }
        else {
            flag = 1;
        }
    }
}

function inputNumber(){
    let flag = 0;
    while (flag === 0){
        y = Number(prompt("Insert a number"));
        if (y < 1 || y > 7){
            alert("Try Again, invalid range");
        }
        else {
            flag = 1;
        }
    }
}

function getDayAfter(x, y){
    let indexDay = daysWeek.indexOf(x);
    if ((indexDay + y) > 6){
        alert(daysWeek[indexDay + y - 7]);
    } else {
        alert(daysWeek[indexDay + y]);
    }
}

inputDay();
inputNumber();
getDayAfter(x, y);

