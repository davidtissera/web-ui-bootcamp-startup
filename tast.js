const myButton = document.createElement("button");
myButton.textContent = "Submit";
const myBody = document.querySelector('body');
myBody.appendChild(myButton);
myButton.onclick = () => {
    const url = new URL('https://api.github.com/search/repositories'),
        params = {q : 'javascript'}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';
    request.send();
    request.onload = () => {
        let newObjectText = request.response;
        let newObject = JSON.parse(newObjectText);
        console.log(newObject);
    }
}
