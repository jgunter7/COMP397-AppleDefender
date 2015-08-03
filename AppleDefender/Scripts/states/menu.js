var states;
(function (states) {
    var Menu = (function () {
        //CONSTRUCTOR
        function Menu() {
            this.main();
        }
        // PUBLIC METHODS
        // update method
        Menu.prototype.update = function () {
        };
        Menu.prototype.playClick = function (event) {
            this.destroy();
            currentState = config.PLAY_STATE;
            changeState();
            this.playButton.off("click", this.playClick);
        };
        // destroy method
        Menu.prototype.destroy = function () {
            //plane.engineSound.stop();
            game.removeAllChildren();
        };
        // main method
        Menu.prototype.main = function () {
            // instantiate new game container
            game = new createjs.Container();
            //add ocean object to stage
            //ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            //game.addChild(ocean);
            // add Mail Pilot Label
            var label = new objects.Label("Mail Pilot", config.FONT_EXTRA_LARGE, config.FONT_FAMILY, config.YELLOW, 320, 140);
            game.addChild(label);
            // add play button to stage
            //this.playButton = new objects.Button("playButton");
            //this.playButton.x = 320;
            //this.playButton.y = 340;
            //game.addChild(this.playButton);
            //this.playButton.on("click", this.playClick, this);
            //add game container to stage
            stage.addChild(game);
        };
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map