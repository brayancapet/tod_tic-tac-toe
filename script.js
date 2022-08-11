const grid = document.querySelector('.grid');
const winning_screen_container = document.querySelector('.winning-screen-container');
const input_name1 = document.querySelector('.input-name1');
const input_name2 = document.querySelector('.input-name2');
const nom1 = document.querySelector('#nom1');
const nom2 = document.querySelector('#nom2');
const name_button = document.querySelector('.name-button');
const choose_name = document.querySelector('.choose-name');


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
    };


     // Reset function that helps me reset my gameboard, as well as my array that helps me get the winning combination
     const reset = () => {
        console.log('reset function used');
        items = [];
        console.log('items array : (need to be empty) : ' + items);
        gameboard.build();
        gameFlow.resetCount;

    };

    const chooseName = (input1, input2) => {
        player1 = input1;
        player2 = input2;
        nom1.textContent = player1;
        nom2.textContent = player2;
        choose_name.style.display = "none";
    }

    return { build }

})();
gameboard.build();

const Player = () => {
    
    let player1 = '';
    let player2 = '';

    

    return { chooseName }
};
name_button.addEventListener('click', )
