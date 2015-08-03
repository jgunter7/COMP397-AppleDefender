var states;
(function (states) {
    var Instruction = (function () {
        //CONSTRUCTOR
        function Instruction() {
            this.main();
        }
        // PUBLIC METHODS
        // update method
        Instruction.prototype.update = function () {
        };
        // destroy method
        Instruction.prototype.destroy = function () {
            game.removeAllChildren();
        };
        // main method
        Instruction.prototype.main = function () {
            // instantiate new game container
            game = new createjs.Container();
            // instantiate avatar and add it to the game container
            // instantiate my bullet manager object
            bulletManager = new managers.BulletManager();
            //add game container to stage
            stage.addChild(game);
        };
        return Instruction;
    })();
    states.Instruction = Instruction;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map