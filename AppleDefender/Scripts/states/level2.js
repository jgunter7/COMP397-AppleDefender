var states;
(function (states) {
    var Level2 = (function () {
        //CONSTRUCTOR
        function Level2() {
            this.main();
        }
        // PUBLIC METHODS
        // update method
        Level2.prototype.update = function () {
            avatar.update();
            bulletManager.update();
        };
        // destroy method
        Level2.prototype.destroy = function () {
            game.removeAllChildren();
        };
        // main method
        Level2.prototype.main = function () {
            // instantiate new game container
            game = new createjs.Container();
            // instantiate avatar and add it to the game container
            avatar = new objects.Avatar("spaceship");
            game.addChild(avatar);
            // instantiate my bullet manager object
            bulletManager = new managers.BulletManager();
            //add game container to stage
            stage.addChild(game);
        };
        return Level2;
    })();
    states.Level2 = Level2;
})(states || (states = {}));
//# sourceMappingURL=level2.js.map