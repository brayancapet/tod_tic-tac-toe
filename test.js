// My query Selectors

const restart_button = document.querySelector('.restart-button');
const top1 = document.querySelector('.top1');
const top2 = document.querySelector('.top2');

const rejouer = document.querySelector('.rejouer');
const name1 = document.querySelector('#top1');
const name2 = document.querySelector('#top2');







const gameboard = (() => {


    const build = () => {
        console.log('build function used');
        grid.innerHTML = '';
        for(let i = 0; i < 9; i++){
            let div = document.createElement('div');
            div.textContent = "";
            div.classList.add('cell',`cell${i}`);
            grid.appendChild(div);
            items.push(div);
        }
        winning_screen_container.style.display = "none";
        top2.innerHTML = nom2_base;
        top1.innerHTML = nom1_base;
        gameboard.querySelector();
    };

   

    // Array that will store the cells in my tic tac toe
    let items = [];

    // Function that put a query selector on every cell of my grid
    const querySelector = () => {
        console.log('querySelector function used');
        const cell = document.querySelectorAll('.cell');
        for(let c of cell){
            c.addEventListener('click', function(){
                c.textContent !== "" ? console.log('not empty') : gameFlow.implementCount() % 2 == 0 ? c.textContent = 'X' : c.textContent = 'O';
                gameboard.winningCombination();
            });
        }
        rejouer.addEventListener('click', gameboard.reset);
    }

    // Function that checks if there is a winning combination or not 
    const winningCombination = () => {
        console.log('winningCombination used');
        let winning  = [
            [items[0].textContent, items[1].textContent, items[2].textContent],
            [items[3].textContent, items[4].textContent, items[5].textContent],
            [items[6].textContent, items[7].textContent, items[8].textContent],
            [items[0].textContent, items[3].textContent, items[6].textContent],
            [items[1].textContent, items[4].textContent, items[7].textContent],
            [items[2].textContent, items[5].textContent, items[8].textContent],
            [items[0].textContent, items[4].textContent, items[8].textContent],
            [items[2].textContent, items[4].textContent, items[6].textContent]
        ];

        for(let win of winning){
            if(win[0] !== "" && win[1] !== "" && win[2] !== ""){
                if(win[0] === win[1] && win[1] === win[2]){
                    winning_screen_container.style.display = "inline-block";
                }
            }
            else {
                console.log('keep playing, to get a winner');
            }
        } 
        
    };

    // Get value of an element through this function 
    const getValue = element => {
        console.log('get value function used');
        let value = element.innerHTML;
        return value;
    };


    return { build, winningCombination, querySelector, getValue, reset };
})();
gameboard.build();





restart_button.addEventListener('click', gameboard.reset);
