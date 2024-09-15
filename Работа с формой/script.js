let form = document.getElementById('myForm');
        form.addEventListener('submit', event => {
            event.preventDefault();
            
            let inputField = document.getElementById('textInput');
            let inputValue = inputField.value;
            
            console.log(inputValue);
        });