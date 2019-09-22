const showMessage = text => `Welcome ${text}`;

const functionWithCallBack = callback => {
  console.log(callback('Mario'));
}

// Async code
window.setTimeout(
  () => console.log(showMessage('Luigi')),
  3000);

// Sync code
functionWithCallBack(showMessage);

const showJoke = text => {
  const element = document.getElementById('joke');
  element.innerHTML = text;
}

// Fetch API example

const btn = document.querySelector('.container #get-new-joke');
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

const clock = document.querySelector('.time');

const clockTimer = () => {
  let time = new Date();
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  } else if (minutes.length < 2) {
    minutes = '0' + minutes;
  } else if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  const timerString = hours + ':' + minutes + ':' + seconds;
  clock.textContent = timerString;
}

clockTimer();
setInterval(clockTimer, 1000);



fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
		"x-rapidapi-key": "4f5710b5d5msh03863099eed0108p114feajsnad31d2daee27",
		"accept": "application/json"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});