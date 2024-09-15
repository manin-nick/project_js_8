document.getElementById('saveLocal').addEventListener('click', saveToLocalStorage);
document.getElementById('saveSession').addEventListener('click', saveToSessionStorage);

function saveToLocalStorage() {
    let key = 'user_data';
    let value = prompt('Введите данные для сохранения:');
    if (value !== null && value !== '') {
        localStorage.setItem(key, value);
        document.getElementById('localMsg').style.display = 'block';
    }
}

function saveToSessionStorage() {
    let key = 'user_data';
    let value = prompt('Введите данные для сохранения:');
    if (value !== null && value !== '') {
        sessionStorage.setItem(key, value);
        document.getElementById('sessionMsg').style.display = 'block';
    }
}