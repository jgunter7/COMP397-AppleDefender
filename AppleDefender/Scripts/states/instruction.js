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
        // main method
        Instruction.prototype.main = function () {
            // instantiate new game container
            game = new createjs.Container();
            //game title image
            var title = new createjs.Bitmap(assets.loader.getResult("logo"));
            title.x = canvas.clientWidth / 2 - (title.getBounds().width / 2);
            title.y = 25;
            game.addChild(title);
            // main scary apple image
            var mainImage = new createjs.Bitmap(assets.loader.getResult("bgin"));
            mainImage.x = (canvas.clientWidth / 4);
            mainImage.scaleX = 0.5;
            mainImage.scaleY = 0.42;
            mainImage.y = 120;
            game.addChild(mainImage);
            // start button
            btnStart = new objects.Button("start");
            btnStart.x = 540;
            btnStart.y = 680;
            btnStart.on("click", this.btnStart_Click);
            game.addChild(btnStart);
            // instruction button
            btnQuitGO = new objects.Button("quit");
            btnQuitGO.x = 740;
            btnQuitGO.y = 680;
            btnQuitGO.on("click", this.btnQuitGO_Click);
            game.addChild(btnQuitGO);
            //add game container to stage
            stage.addChild(game);
        };
        // start game;
        Instruction.prototype.btnStart_Click = function () {
            // set the current state
            game.removeAllChildren();
            currentState = config.PLAY_STATE;
            // calling main game function
            changeState();
        };
        // quit to main menu.
        Instruction.prototype.btnQuitGO_Click = function () {
            // set the current state
            game.removeAllChildren();
            currentState = config.MENU_STATE;
            // calling main game function
            changeState();
        };
        return Instruction;
    })();
    states.Instruction = Instruction;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map