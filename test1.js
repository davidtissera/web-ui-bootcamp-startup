const myRequest = () => {

}

var url = new URL('https://api.github.com/search/repositories'),
    params = {q : 'Javascript'}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
fetch(url).then(function(response){
    response.text().then(function(text){
        console.log(text);
    });
});

    const AsyncFunc = async () => {
        let response = await fetch(url);
        let data = await response.json()
        return data;
    }
    AsyncFunc()
        .then(data => console.log(data)); 
