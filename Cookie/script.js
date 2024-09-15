document.getElementById('setCookie').addEventListener('click', function() {
    if (!document.cookie.includes('username')) {
      document.cookie = 'username=JohnDoe';
      console.log('Cookie успешно установлен.');
    } else {
      console.log('Cookie уже установлен.');
    }
  });