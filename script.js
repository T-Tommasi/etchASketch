//Global variables used in the project
const CONTAINER = document.querySelector('.grid');
let times = prompt('How many squares per side?', '16')
let flex_basis = 100/times


//Set up a 16*16 grid with the tiles
function createGrid (times) {
    for (i = 0; i < times*times; ++i) {
        let grid_tile = document.createElement('div');
        grid_tile.setAttribute('class','tile')
        grid_tile.style.flexBasis = `${flex_basis}%`
        CONTAINER.appendChild(grid_tile)
    }
}

createGrid(times)