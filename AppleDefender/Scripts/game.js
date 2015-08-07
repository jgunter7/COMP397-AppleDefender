/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="config/config.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="managers/bullet.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
// on branch atlas
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var game;
// Game Variables
var gunner;
var grass;
var grass2;
var bgToolBar;
var wall;
var apples = [];
var btnStart;
var btnInstructions;
var btnBack;
var btnNext;
var btnQuitGO;
var btnQuit;
var btnPause;
var btnPlay;
var btnUpgradeWall;
var btnUpgradeClip;
var btnUpgradeRTime;
var btnReload;
var hud;
var score = 0;
var money = 0;
var pause = false;
var autoGun = false;
var agCount = 0;
// Game Managers
var assets;
var bulletManager;
// Game States
var currentStateFunction; // state alias
var currentState;
var gameOver;
var instructions;
var play;
var menu;
// Preloader Function
function preload() {
    // instantiate asset manager class
    assets = new managers.Asset();
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    // set the current state
    currentState = config.MENU_STATE;
    // calling main game function
    changeState();
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '10px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    currentStateFunction.update();
    stage.update();
    stats.end(); // end measuring
}
// Our Main Game Function
function changeState() {
    // instantiate new game container
    game = new createjs.Container();
    // State Machine
    switch (currentState) {
        case config.MENU_STATE:
            // instantiate menu state;
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case config.INSTRUCTION_STATE:
            // instantiate instruction state;
            instructions = new states.Instruction();
            currentStateFunction = instructions;
            break;
        case config.PLAY_STATE:
            // instantiate play state;
            play = new states.Play();
            currentStateFunction = play;
            break;
        case config.GAME_OVER_STATE:
            // instantiate game over state;
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
    }
    //add game container to stage
    stage.addChild(game);
}
//# sourceMappingURL=game.js.map