const showMessage = text => `Welcome ${text}`;

const functionWithCallBack = callback => {
  console.log(callback('Mario'));
}

// Async code
window.setTimeout(
  () => console.log(showMessage('Luigi')),
  3000);

window.setInterval(
  () => console.log(new Date()),
  1000
)

// Sync code
functionWithCallBack(showMessage);

const showJoke = text => {
  const element = document.getElementById('joke');
  element.innerHTML = text;
}

// Fetch API example
const apiURl = 'https://api.chucknorris.io/jokes/random';

showJoke('Loading...');

window.fetch(apiURl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    if (data && data.value) {
      showJoke(data.value);
    }
  });
