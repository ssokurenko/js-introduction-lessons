const showMessage = text => `Welcome ${text}`;

const functionWithCallBack = callback => {
  console.log(callback('Mario'));
}

// Async code
window.setTimeout(
  () => console.log(showMessage('Luigi')),
  3000);

/*window.setInterval(
  () => console.log(new Date()),
  1000
)*/

// Sync code
functionWithCallBack(showMessage);

const showJoke = text => {
  const element = document.getElementById('joke');
  element.innerHTML = text;
}

// Fetch API example

let btn = document.querySelector('.container .btn');
const apiURl = 'https://api.chucknorris.io/jokes/random';

btn.onclick = () => {
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
}

let clock = document.querySelector('.time');

let clockTimer = () => {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hours < 10) {
    hours = '0' + hours;
  }else if (minutes < 10){
    minutes = '0' + minutes;
  }else if (seconds < 10){
    seconds = '0' + seconds;
  }

  let timerString = hours + ':' + minutes + ':' + seconds;

  clock.textContent = timerString;
}

clockTimer();
setInterval(clockTimer, 1000);



