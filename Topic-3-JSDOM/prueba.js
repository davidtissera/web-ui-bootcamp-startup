let div = document.querySelector('div');
let myUl = document.createElement('ul');
let myInput = document.createElement('input');
let myButton = document.createElement('button');

myButton.onclick = () => {
    console.log("You've searched for " + myInput.value);
    const url = new URL('https://api.github.com/search/repositories'),
        params = {q : myInput.value}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';
    request.send();
    request.onload = () => {
        let newObjectText = request.response;
        let newObject = JSON.parse(newObjectText);
        console.log(newObject.items);
        showInformation(newObject);
    }
}

div.appendChild(myUl);
div.appendChild(myInput);
div.appendChild(myButton);
myButton.textContent = "Submit";
myUl.style.width = "500px";
myUl.style.height = "500px";
myUl.style.wordWrap = "break-word";
myUl.style.fontSize = "small";
myUl.style.position = "absolute";
myUl.style.paddingLeft = "750px";

const showInformation = (myObject) => {
    for (let i = 0; i < 30; i++){
        let myList = document.createElement('li');
        myList.textContent = JSON.stringify(myObject.items[i]);
        myUl.appendChild(myList);
    }
}



