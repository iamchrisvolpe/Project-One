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

    currentFoodPostion  =  Math.random();
    currentFoodPostion  =  Math.floor(currentFoodPostion  *  1600);
    gameBoardPixels[currentFoodPostion].classList.add("food");
};


const  LEFT_DIR  =  37;
const  UP_DIR  =  38;
const  RIGHT_DIR  =  39;
const  DOWN_DIR  =  40;

let  snakeCurrentDirection  =  RIGHT_DIR;

const  changeDirection  =  newDirectionCode  => {
    if (newDirectionCode  ==  snakeCurrentDirection) return;
    if (newDirectionCode  ==  LEFT_DIR  &&  snakeCurrentDirection  != RIGHT_DIR) {
        snakeCurrentDirection  =  newDirectionCode;
    } else  if (newDirectionCode  ==  UP_DIR  &&  snakeCurrentDirection  !=  DOWN_DIR) {
        snakeCurrentDirection  =  newDirectionCode;
    } else  if (newDirectionCode  ==  RIGHT_DIR  && snakeCurrentDirection  !=  LEFT_DIR) {
        snakeCurrentDirection  =  newDirectionCode;
    } else  if (newDirectionCode  ==  DOWN_DIR  &&  snakeCurrentDirection  !=  UP_DIR) {
        snakeCurrentDirection  =  newDirectionCode;
    }
};