document.getElementById('myButton').innerHTML = 'Нажми меня';

let myButton = document.getElementById('myButton');

myButton.addEventListener('mouseover', () => {
  myButton.style.backgroundColor = 'red';
});

myButton.addEventListener('mouseout', () => {
  myButton.style.backgroundColor = '#ddd';
});
