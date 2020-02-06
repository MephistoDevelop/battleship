const display = (() => {

  const render = () => {
    const human = document.querySelector('.human');
    const computer = document.querySelector('.computer');
    let board = '';

    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        board += `<div data-position-x=${x} data-position-y=${y} class="box" id="box${x}${y}"></div>`;
      }
    }

    human.innerHTML = board;
    computer.innerHTML = board;
    const boxs = document.getElementsByClassName('box');
    for (let i = 0; i < boxs.length; i += 1) {
      const x = boxs[i].getAttribute('data-position-x');
      const y = boxs[i].getAttribute('data-position-y');
      boxs[i].addEventListener('click', () => {
        if (i % 2 === 0) boxs[i].style.backgroundImage = "url('./img/hole.png')";
        else boxs[i].style.backgroundImage = "url('./img/ex.png')";
        clickEvent(x, y);
      });
    }
  };
  const clickEvent = (x, y) => {
    const message = document.getElementById('messages');
    message.innerText = `Cell: X: ${x} - Y:${y} Clicked`;
    console.log(x + ' - ' + y);
  };
  return { render };
})();

export default display;
