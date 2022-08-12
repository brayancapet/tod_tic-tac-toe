const grid = document.querySelector('.grid');
const name_button = document.querySelector('.name-button');
const input_name1 = document.querySelector('.input-name1');
const input_name2 = document.querySelector('.input-name2');
const name_card1 = document.querySelector('#top1');
const name_card2 = document.querySelector('#top2');
const choose_name = document.querySelector('.choose-name');
const winning_screen_container = document.querySelector('.winning-screen-container');
const winning_screen_content = document.querySelector('.winning-screen-content');

const rejouer = document.querySelector('.rejouer');
const restart = document.querySelector('.restart-button');
const win_span = document.querySelector('#winner');

let mark1 = '';
let mark2 = '';
let name1 = '';
let name2 = '';

let winner = '';

const gameflow = (() => {
    let count = 1;


    const implementCount = () => {
        count ++;
        return count;
    }

    const resetCount = () => {
        count = 1;
        return count;
    }

    const setUp = () => {
            console.log('set up function used');
                let player1 = player(input_name1.value, 'X');
                let player2 = player(input_name2.value, 'O');
                name_card1.textContent = player1.name;
                name_card2.textContent = player2.name;
                name1 = player1.name;
                name2 = player2.name;
                choose_name.style.display = 'none';
                console.log({player1, player2});
                mark1 = player1.player_mark;
                mark2 = player2.player_mark;
    }

    

    return { implementCount, resetCount, setUp};
})();



const gameboard = (() => {

    let items = [];

    // build my grid
    const build = () => {
        console.log('build function used.');

        grid.innerHTML = '';
        for(let i = 0; i < 9; i++){
            let div = document.createElement('div');
            div.textContent = "";
            div.classList.add('cell',`cell${i}`);
            grid.appendChild(div);
            items.push(div);
        }
        gameboard.querySelector();
        winning_screen_container.style.display = 'none';
        restart.addEventListener('click', function(){
            location.reload();
        });
    }

    // Function that put a query selector on every cell of my grid
    const querySelector = () => {
        console.log('querySelector function used');
        const cell = document.querySelectorAll('.cell');
        for(let c of cell){
            c.addEventListener('click', function(){
                c.textContent !== "" ? console.log('not empty') : gameflow.implementCount() % 2 == 0 ? c.textContent = mark1 : c.textContent = mark2;
                gameboard.winningCombination();
            });
        }
        
    }

    // Function that checks if there is a winning combination or not 
    const winningCombination = () => {
        console.log('winningCombination used');
        let win_sit = false;
        let test = 0;

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
                    win_sit = true;
                    winning_screen_container.style.display = "inline-block";
                    rejouer.addEventListener('click', gameboard.reset);
                    // console.log(typeof win[0], win[0],typeof mark1, mark1);
                    win[0] == mark1 ? winner = name1 : winner = name2;
                    winning_screen_content.innerHTML = `
                    <p>Nous avons un gagnant !</p>
                    <p>Bien joué, <span style="color: #660600;" id="winner">Brayan</span>, tu as remporté la partie </p>
                    <button type="button" class="rejouer">Rejouer</button>
                    `;
                    // console.log(winner);
                    document.querySelector('#winner').innerHTML = winner;
                    document.querySelector('.rejouer').addEventListener('click', gameboard.reset);
                } else {
                    
                }
            }
            else {
                
            }
        } 

        
        for(let i of items){
            //i.innerHTML == 'X' || i.innerHTML == 'O' ? test + 1 : test + 0;
            if(i.innerHTML == 'X' || i.innerHTML == 'O') {
                test++
                console.log(test)
            }
        }
               
        if(test === 9 && win_sit === false){
            console.log(test, win_sit)
            winning_screen_content.innerHTML = `
                <p> Vous faites une égalité.</p>
                <p>Et si vous faisiez une revanche ?</p>
                <button class="revenge">Revanche</button>
                `;
            winning_screen_container.style.display = 'block';
            document.querySelector('.revenge').addEventListener('click', gameboard.reset);
        }
        
        
    };

    // Reset function that helps me reset my gameboard, as well as my array that helps me get the winning combination
    const reset = () => {
        console.log('reset function used');
        items = [];
        console.log('items array : (need to be empty) : ' + items);
        gameboard.build();
        gameflow.resetCount();

    };

    return { build, querySelector, winningCombination, reset }

})();
gameboard.build();

const player = (input, mark) => {
    let name = input;
    let player_mark = mark;

    return { name, player_mark}
};

name_button.addEventListener('click', gameflow.setUp);

