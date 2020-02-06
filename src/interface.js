const display = (() => {
  const render = () => {  
    const human = document.querySelector('.human');
    const computer = document.querySelector('.computer');
    let board = '';
    for (let i = 0; i < 100; i += 1) {
        board += `<div data-position=${i} class="box"></div>`;
    }
    human.innerHTML = board;
    computer.innerHTML = board;
  }

  return { render}
})();

export default display;
