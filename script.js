//Global variables used in the project
const CONTAINER = document.querySelector('.grid');
const SET_BLACK = document.querySelector('#black');
const SET_RAINBOW = document.querySelector('#rainbow');

//set a function for determining the number of squares
let squaresPerSide = () => prompt('How many suqares per side?', '16')

//Set up a 16*16 grid with the tiles using a black coloring
function createGridBlack (times) {
    let flex_basis = 100/times;
    for (i = 0; i < times*times; ++i) {
        let grid_tile = document.createElement('div');
        grid_tile.setAttribute('class','tile');
        grid_tile.style.flexBasis = `${flex_basis}%`;
        grid_tile.style.backgroundColor = `white`;
        CONTAINER.appendChild(grid_tile);
        grid_tile.addEventListener('mousedown', function () {
            grid_tile.style.background = 'black';
        })
    }
}

//Set up a grid with the tiles using random coloring
function createGridRainbow (times) {
    let flex_basis = 100/times;
    for (i = 0; i < times*times; ++i) {
        let grid_tile = document.createElement('div');
        grid_tile.setAttribute('class','tile');
        grid_tile.style.flexBasis = `${flex_basis}%`;
        grid_tile.style.opacity = `1`;
        grid_tile.style.backgroundColor = `white`;
        CONTAINER.appendChild(grid_tile);
        grid_tile.addEventListener('mousedown', function () {
            let colors = ['green', 'red', 'purple', 'blue', 'orange', 'pink', 'yellow'];
            let opacity = parseFloat(grid_tile.style.opacity) || 0;
            if (!grid_tile.style.background) {
                grid_tile.style.background = colors[Math.floor(Math.random()*colors.length)];
            }
            if (opacity > 0) {
                grid_tile.style.opacity = opacity - 0.1;
                };
            })
        }
    }

//Function that transform the squares background to black if hovered
function blackSquare (squareTile) {
    squareTile.addEventListener('click', function () {
        squareTile.style.background = 'black'
    })
}

//Initial function for populating the page
createGridBlack(8)

//Set up event listeners for the various buttons
//RESET button should reset the grill to the specified square size
SET_BLACK.addEventListener('click', function () {
    CONTAINER.innerHTML = '';
    createGridBlack(squaresPerSide());
})

//RAINBOW button for coloring the squares of rainbow shades
SET_RAINBOW.addEventListener('click', function () {
    CONTAINER.innerHTML = '';
    createGridRainbow(squaresPerSide())
})