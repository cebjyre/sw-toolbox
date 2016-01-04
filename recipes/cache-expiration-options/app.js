/* eslint-env browser */
'use strict';

const API_URL = 'http://www.timeapi.org/utc/now.json';

function fetchCurrentTime() {

  let url = new URL(API_URL);

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  }).then(function(json) {
    return json.items;
  });
}

document.querySelector('#search').addEventListener('submit', event => {
  event.preventDefault();

  var results = document.querySelector('#results');
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  fetchCurrentTime().then(data => {
    let displayedTime = document.createElement('p');
    displayedTime.innerHTML = data.dateString;
    results.appendChild(img);
    console.log('displaying', data.dateString)
  }).catch(error => console.warn('something went wrong', error));
});
