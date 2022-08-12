const grid = document.querySelector('.grid');
const winning_screen_container = document.querySelector('.winning-screen-container');
const input_name1 = document.querySelector('.input-name1');
const input_name2 = document.querySelector('.input-name2');
const nom1 = document.querySelector('#nom1');
const nom2 = document.querySelector('#nom2');
const name_button = document.querySelector('.name-button');
const choose_name = document.querySelector('.choose-name');
const name_card1 = document.querySelector('#top1');
const name_card2 = document.querySelector('#top2');
const rejouer = document.querySelector('.rejouer');


// Gameflow module that allows me to switch between 'X' and 'O'
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

    items = [];

    // Function that build my gameboard
    function build() {
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
        gameboard.querySelector();
    };


     // Reset function that helps me reset my gameboard, as well as my array that helps me get the winning combination
     const reset = () => {
        console.log('reset function used');
        items = [];
        console.log('items array : (need to be empty) : ' + items);
        gameboard.build();
        gameFlow.resetCount;

    };

    const chooseName = () => {
        let player1 = Player(input_name1.value);
        let player2 = Player(input_name2.value);
        player1.giveMark('X');
        player2.giveMark('O');
        //player1 = input_name1.value;
        //player2 = input_name2.value;
        nom1.textContent = player1.name;
        nom2.textContent = player2.name;
        choose_name.style.display = "none";
        console.log(player1, player2);
        name_card1.textContent = player1.name;
        name_card2.textContent = player2.name;
    }

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
                    rejouer.addEventListener('click', gameboard.reset);
                }
            }
            else {
                console.log('keep playing, to get a winner');
            }
        } 
        
    };

    return { build, chooseName, querySelector, winningCombination, reset, player1, player2 }

})();
gameboard.build();

const Player = (input) => {
    let name = input;
    let mark = '';

    const giveMark = mark => {
        this.mark = mark;
    }

    return { name, giveMark }
};


name_button.addEventListener('click', function() {
    gameboard.chooseName();
});
