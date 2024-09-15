let inputField = document.getElementById('textInput');
let outputElement = document.getElementById('displayText');

inputField.addEventListener('input', () => {
  let textValue = inputField.value;
  outputElement.innerText = textValue;
});
