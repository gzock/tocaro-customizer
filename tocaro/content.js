var timerId = setInterval( () => {
  var workBoard = document.getElementsByClassName('_3ppUyGsr6HJsQ3prbkWmJO');
  if(workBoard.length > 0 && workBoard[0].nodeName) {
    workBoard[0].addEventListener('click', () => {
      document.getElementsByClassName('_2NPRmMAaYT17L5XHPk-Xl- ')[0].click();
    });
    clearInterval(timerId);
  }
}, 1000);
