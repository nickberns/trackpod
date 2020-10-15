const fetch = require('node-fetch');

const URL = 'https://api.track-pod.com/Order/Number/000114';
const KEY = 'ef8e27af-e455-45d1-a3a8-01fd6b563cf4';

async function getData(URL) {
  const response = await fetch(URL, {
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'X-API-KEY': KEY,
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}

getData(URL)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
