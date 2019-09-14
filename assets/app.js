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
