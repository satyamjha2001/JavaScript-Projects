const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock');

// const date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
