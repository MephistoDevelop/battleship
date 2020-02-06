const display = (() => {
  const render = () => {  
    const board = document.querySelector('.board');
    const human = document.querySelector('.human');
    const computer = document.querySelector('.computer');
    const message = document.querySelector('.messageText');
    let board = '';
    for (let x = 0; x < 10; x += 1) {
        for (let y = 0; y < 10; y += 1) {
            board += `<div data-position-x=${x} data-position-y=${y} class="box"></div>`;
        }
    }
    
    human.innerHTML = board;
    computer.innerHTML = board;
    let turn = 'Player turn'
    message.innerText = 'Player turn'
  }

  return { render}
})();

export default display;
