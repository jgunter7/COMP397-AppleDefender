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

    // control variables
    export var FIRING: boolean = false;

    // bullet constants
    export const BULLET_SPEED: number = 25;
    
} 