

const request = require('request');

const URLs = [
  
]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log("Iniciando Request in API");
    await sleep(2000);
 
  // Sleep in loop
  for (let i = 0; i < 50; i++) {
    //if (i === 3)
    console.log(i);
    URLs.forEach(link => {
        request_api(link);
        
    });
    await sleep(1000);
    //request_api();
  }
}

demo();

function request_api(curl){
    console.log("REQUEST: " + curl);
    request(curl, function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
}


/*
const request = require('request');

request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});
*/
