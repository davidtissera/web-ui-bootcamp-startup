let palWord = prompt("Type a word");
let flag;

function verifyPalindrome(){
    k = palWord.length;
    flag = 0;
    for (i = 0; i < palWord.length && flag != 1; i++){
        if (palWord[i] !== palWord[k-1]){
            flag = 1;
        }
        k--;
    }
}

verifyPalindrome();

if (flag === 1){
    alert("The type is not valid");
}

console.log(flag);
console.log(palWord);
