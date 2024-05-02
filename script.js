//Global variables used in the project
const CONTAINER = document.querySelector('.grid');
const RESET_BUTTON = document.querySelector('#reset');
const BLACK_BUTTON = document.querySelector('#black');

//set a function for determining the number of squares
let squaresPerSide = () => prompt('How many suqares per side?', '16')

//Set up a 16*16 grid with the tiles
function createGrid (times) {
    let flex_basis = 100/times;
    for (i = 0; i < times*times; ++i) {
        let grid_tile = document.createElement('div');
        grid_tile.setAttribute('class','tile');
        grid_tile.style.flexBasis = `${flex_basis}%`;
        CONTAINER.appendChild(grid_tile);
    }
}

//Function that transform the squares background to black if hovered

//Initial function for populating the page
createGrid(squaresPerSide())

//Set up event listeners for the various buttons
//RESET button should reset the grill to the specified square size
RESET_BUTTON.addEventListener('click', function () {
    CONTAINER.innerHTML = '';
    createGrid(squaresPerSide());
})
