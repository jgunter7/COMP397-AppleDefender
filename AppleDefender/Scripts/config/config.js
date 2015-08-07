var config;
(function (config) {
    // font constants
    config.FONT_FAMILY = "Consolas";
    config.FONT_SMALL = "20px";
    config.FONT_MEDIUM = "40px";
    config.FONT_LARGE = "60px";
    config.FONT_EXTRA_LARGE = "80px";
    // colour constants
    config.WHITE = "#FFFFFF";
    config.BLACK = "#000000";
    config.YELLOW = "#FFFF00";
    config.RED = "#FF0000";
    config.GREEN = "#00FF00";
    config.BLUE = "#0000FF";
    // state constants
    config.MENU_STATE = 0;
    config.INSTRUCTION_STATE = 1;
    config.PLAY_STATE = 2;
    config.GAME_OVER_STATE = 3;
    // control variables
    config.FIRING = false;
    // bullet constants
    config.BULLET_SPEED = 25;
})(config || (config = {}));
//# sourceMappingURL=config.js.map