let button = document.querySelector('button');

button.onclick = function(){
    let input = document.querySelector('input').value;
    let k = input.length;
    let flag = 0;
    for (i = 0; i < k && flag != 1; i++){
        if (input[i] !== input[k-1]){
            flag = 1;
        }
        k--;
    }
    if (flag === 1){
        alert('The type is not valid');
    } else {
        alert('The string is a palindrome');
    }
}

