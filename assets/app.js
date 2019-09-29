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
  const points = seconds % 2 === 0 ? ':' : ' ';

  if (hours.length < 2) {
    hours = '0' + hours;
  } else if (minutes.length < 2) {
    minutes = '0' + minutes;
  } else if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  const timerString = hours + points + minutes + points + seconds;
  clock.textContent = timerString;

}

clockTimer();
setInterval(clockTimer, 1000);


fetch('https://reqres.in/api/users?page=2')
  .then(response => {
    return response.json();
  })

  .then(data => {
    let sorting = data.data.sort((a, b) => {
      let nameA = a.email.toUpperCase();
      let nameB = b.email.toUpperCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    sorting.forEach(data => {
      let str = document.querySelector('.weather');
      let node = document.createElement('div');
      let textArea = document.createTextNode(data.email);
      node.appendChild(textArea);
      document.querySelector('.email').appendChild(node);
    })
  })
  
  .catch(err => {
    console.error(err);
  });

