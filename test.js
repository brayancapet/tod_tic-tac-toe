// My query Selectors

const restart_button = document.querySelector('.restart-button');
const top1 = document.querySelector('.top1');
const top2 = document.querySelector('.top2');

const rejouer = document.querySelector('.rejouer');
const name1 = document.querySelector('#top1');
const name2 = document.querySelector('#top2');







const gameboard = (() => {

    // Get value of an element through this function 
    const getValue = element => {
        console.log('get value function used');
        let value = element.innerHTML;
        return value;
    };



})();
gameboard.build();





restart_button.addEventListener('click', gameboard.reset);
