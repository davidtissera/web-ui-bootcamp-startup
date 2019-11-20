let daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let button = document.querySelector('button');
let dayNumText = document.querySelector('p');

button.addEventListener("click", formvalidate);

function formvalidate(){
    dayNumText.textContent = "Ingrese Numero";
    let input = document.querySelector('input').value;
    
    console.log(input);
}