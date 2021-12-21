const GAME_PIXEL_COUNT = 40;
const SQUARE_OF_GAME_PIXEL_COUNT = Math.pow(GAME_PIXEL_COUNT, 2);

let totalFoodAte = 0;
let totalDistanceTravelled = 0;

const  gameContainer  =  document.getElementById("gameContainer");
const  createGameBoardPixels  = () => {
    for (let  i  =  1; i  <=  1600; ++i) {
        gameContainer.innerHTML  =  `${gameContainer.innerHTML} <div class="gameBoardPixel" id="pixel${i}"></div>`;
    }
};

const  gameBoardPixels  =  document.getElementsByClassName("gameBoardPixel");

let  currentFoodPostion  =  0;
const  createFood  = () => {
    gameBoardPixels[currentFoodPostion].classList.remove("food");
}