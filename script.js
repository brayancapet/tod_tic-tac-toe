// My query Selectors
const grid = document.querySelector('.grid');
const restart_button = document.querySelector('.restart-button');
const top1 = document.querySelector('.top1');
const top2 = document.querySelector('.top2');
const edit_icon = document.querySelector('.fa-pen-to-square');

let nom1 = 'Joueur 1';
let nom2 = 'Joueur 2';
let isInput = false;

const gameFlow = (() => {
    let count = 0;

    const implementCount = () => {
        count ++;
        return count;
    }

    const resetCount = () => {
        count = 0;
        return count;
    }
    return { implementCount, resetCount };
})();



const gameboard = (() => {

    // Function that build my gameboard
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
        gameboard.querySelector();
    };

    const reset = () => {
        console.log('reset function used');
        items = [];
        console.log('items array : (need to be empty) : ' + items);
        gameboard.build();
        gameFlow.resetCount;

    };

    let items = [];

    const querySelector = () => {
        console.log('querySelector function used');
        const cell = document.querySelectorAll('.cell');
        for(let c of cell){
            c.addEventListener('click', function(){
                c.textContent !== "" ? console.log('not empty') : gameFlow.implementCount() % 2 == 0 ? c.textContent = 'X' : c.textContent = 'O';
                gameboard.winningCombination();
            });
        }

    }

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

        console.log(winning[0][0], winning[0][1], winning[0][2]);

        /* for(let win of winning){
            if(win[0] !== "" && win[1] !== "" && win[2] !== ""){
                if(win[0] === win[1] && win[1] === win[2]){
                    alert('winner');
                }
            }
            else {
                console.log('keep playing, to get a winner');
            }
        } */
        
    };

    const getValue = element => {
        console.log('get value function used');
        let value = element.innerHTML;
        return value;
    };

    return { build, winningCombination, querySelector, getValue, reset };
})();
gameboard.build();




const Player = (name_var, name) => {
    name_var = name;
    const sayName = () => {
        console.log(name);
    };

    
    return { sayName };
};

restart_button.addEventListener('click', gameboard.reset);
