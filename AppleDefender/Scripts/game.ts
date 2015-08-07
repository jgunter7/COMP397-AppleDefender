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
var stage: createjs.Stage;
var stats: Stats;
var game: createjs.Container;


// Game Variables
var gunner: objects.Gun;
var grass: objects.Image;
var grass2: objects.Image;
var bgToolBar: objects.Image;
var wall: objects.Wall;
var apples: objects.Apple[] = [];
var btnStart: objects.Button;
var btnInstructions: objects.Button;
var btnBack: objects.Button;
var btnNext: objects.Button;
var btnQuitGO: objects.Button;
var btnQuit: objects.Button;
var btnPause: objects.Button;
var btnPlay: objects.Button;
var btnUpgradeWall: objects.Button;
var btnUpgradeClip: objects.Button;
var btnUpgradeRTime: objects.Button;
var btnReload: objects.Button;

var hud: objects.HUD;
var score: number = 0;
var money: number = 0;
var pause: boolean = false;
var autoGun: boolean = false;
var agCount: number = 0;


// Game Managers
var assets: managers.Asset;
var bulletManager: managers.BulletManager;

// Game States
var currentStateFunction; // state alias
var currentState: number;
var gameOver: states.GameOver;
var instructions: states.Instruction;
var play: states.Play;
var menu: states.Menu;


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