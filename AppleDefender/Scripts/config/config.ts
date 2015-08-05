module config {

    // font constants
    export const FONT_FAMILY: string = "Consolas";
    export const FONT_SMALL: string = "20px";
    export const FONT_MEDIUM: string = "40px";
    export const FONT_LARGE: string = "60px";
    export const FONT_EXTRA_LARGE: string = "80px";

    // colour constants
    export const WHITE: string = "#FFFFFF";
    export const BLACK: string = "#000000";
    export const YELLOW: string = "#FFFF00";
    export const RED: string = "#FF0000";
    export const GREEN: string = "#00FF00";
    export const BLUE: string = "#0000FF";


    // state constants
    export const MENU_STATE: number = 0;
    export const INSTRUCTION_STATE: number = 1;
    export const PLAY_STATE: number = 2;
    export const GAME_OVER_STATE: number = 3;

    // key constants
    export const KEY_LEFT: number = 37;
    export const KEY_RIGHT: number = 39;
    export const KEY_UP: number = 38;
    export const KEY_DOWN: number = 40;
    export const KEY_SPACE: number = 32;
    export const KEY_A: number = 65;
    export const KEY_S: number = 83;
    export const KEY_D: number = 68;
    export const KEY_W: number = 87;

    // control variables
    export var FORWARD: boolean = false;
    export var REVERSE: boolean = false;
    export var TURN_LEFT: boolean = false;
    export var TURN_RIGHT: boolean = false;
    export var FIRING: boolean = false;


    // avatar constants
    export const PLAYER_FORWARD: number = 5;
    export const PLAYER_SLIDE: number = 3;
    export const PLAYER_REVERSE: number = 2;
    export const PLAYER_TURN_RATE: number = 2;

    // bullet constants
    export const BULLET_SPEED: number = 25;
    export const APPLE_SPEED1: number = 2;
    export const APPLE_SPEED2: number = 4;
    export const APPLE_SPEED3: number = 8;
} 