// My query Selectors
const grid = document.querySelector('.grid');
const restart_button = document.querySelector('.restart-button');
const top1 = document.querySelector('.top1');
const top2 = document.querySelector('.top2');
const edit_icon = document.querySelector('.fa-pen-to-square');

let nom1 = 'Joueur 1';
let nom2 = 'Joueur 2';
let isInput = false;

const gameboard = (() => {

    // Template for when my content switch from a paragraph to an input 
    const active_input = `
        <div>
            <input type="text" value="Joueur invité" class="input-name">
            <button type="button" class="input-button">renommer</button>
        </div>
    `;

    // Template for when my content switch from an input to a paragraph
    const inactive_input = `<div><p id="top1">Joueur invité</p> <i class="fa-solid fa-pen-to-square"></i></div>`;

    // Function that is supposed to change the content of my container according to the value of isInput
    const name_container_switch = (element) => {
        isInput == false ? element.innerHTML = active_input : element.innerHTML = inactive_input;
    };

    // Function that build my gameboard
    const build = () => {
        grid.innerHTML = '';
        for(let i = 0; i < 9; i++){
            let div = document.createElement('div');
            div.classList.add(`cell${i}`);
            grid.appendChild(div);
        }
    };

    return { build, name_container_switch };
})();
gameboard.build();
edit_icon.addEventListener('click', gameboard.name_container_switch(top1));

const Player = (name_var, name) => {
    name_var = name;
    const sayName = () => {
        console.log(name);
    };

    
    return { sayName };
};

const player1 = Player(nom1, 'player1');
const player2 = Player(nom2, 'player2');
player1.sayName();
player2.sayName();