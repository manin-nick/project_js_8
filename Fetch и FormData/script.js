$(document).ready(function () {
  $('#myForm').on('submit', function (e) {
    e.preventDefault();

    let inputField = $('#textInput');
    let inputValue = inputField.val();

    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      data: JSON.stringify({
        title: inputValue,
      }),
      contentType: 'application/json',
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.error('Ошибка: ', error);
      },
    });
  });
});
