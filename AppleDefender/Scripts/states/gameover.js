var states;
(function (states) {
    var GameOver = (function () {
        //CONSTRUCTOR
        function GameOver() {
            this.main();
        }
        // PUBLIC METHODS
        // update method
        GameOver.prototype.update = function () {
            ocean.update();
        };
        GameOver.prototype.tryAgainClick = function (event) {
            this.destroy();
            currentState = config.PLAY_STATE;
            changeState();
            this.tryAgainButton.off("click", this.tryAgainClick);
        };
        // destroy method
        GameOver.prototype.destroy = function () {
            game.removeAllChildren();
        };
        // main method
        GameOver.prototype.main = function () {
            // instantiate new game container
            game = new createjs.Container();
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            game.addChild(ocean);
            // add Mail Pilot Label
            var label = new objects.Label("GAME OVER", config.FONT_EXTRA_LARGE, config.FONT_FAMILY, config.YELLOW, 320, 140);
            game.addChild(label);
            var scoreLabel = new objects.Label("SCORE: " + score, config.FONT_MEDIUM, config.FONT_FAMILY, config.YELLOW, 320, 240);
            game.addChild(scoreLabel);
            // add play button to stage
            this.tryAgainButton = new objects.Button("tryAgainButton");
            this.tryAgainButton.x = 320;
            this.tryAgainButton.y = 340;
            game.addChild(this.tryAgainButton);
            this.tryAgainButton.on("click", this.tryAgainClick, this);
            //add game container to stage
            stage.addChild(game);
        };
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map