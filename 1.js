const axios = require('axios');

let urls = [
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
    'https://fa.wikipedia.org','https://fa.wikipedia.org','https://fa.wikipedia.org',
]
let counter = 0 ; 
function gerReq(url){
    axios.get(url)
    .then(resp=>{console.log('get: ', counter++); gerReq(urls.pop())})
    .catch(err=>console.log('error: ' , err));
}

gerReq(urls.pop());
