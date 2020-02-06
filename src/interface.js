const display = (() => {
  const render = () => {  
    const human = document.querySelector('.human');
    const computer = document.querySelector('.computer');
    let board = '';
    for (let x = 0; x < 10; x += 1) {
        for (let y = 0; y < 10; y += 1) {
            board += `<div data-position-x=${x} data-position-y=${y} class="box"></div>`;
        }
    }
    
    human.innerHTML = board;
    computer.innerHTML = board;
  }

  return { render}
})();

export default display;
