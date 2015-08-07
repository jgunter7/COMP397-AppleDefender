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
        // main method
        Menu.prototype.main = function () {
            // instantiate new game container
            game = new createjs.Container();
            //game title image
            var title = new createjs.Bitmap(assets.loader.getResult("logo"));
            title.x = canvas.clientWidth / 2 - (title.getBounds().width / 2);
            title.y = 50;
            game.addChild(title);
            // main scary apple image
            var mainImage = new objects.Image("mApple");
            mainImage.x = (canvas.clientWidth / 2);
            mainImage.y = 350;
            game.addChild(mainImage);
            // start button
            btnStart = new objects.Button("start");
            btnStart.x = 500;
            btnStart.y = 600;
            btnStart.on("click", this.btnStart_Click);
            game.addChild(btnStart);
            // instruction button
            btnInstructions = new objects.Button("instructions");
            btnInstructions.x = 780;
            btnInstructions.y = 600;
            btnInstructions.on("click", this.btnInstructions_Click);
            game.addChild(btnInstructions);
            //add game container to stage
            stage.addChild(game);
        };
        Menu.prototype.btnStart_Click = function () {
            // set the current state
            game.removeAllChildren();
            currentState = config.PLAY_STATE;
            // calling main game function
            changeState();
        };
        Menu.prototype.btnInstructions_Click = function () {
            // set the current state
            game.removeAllChildren();
            currentState = config.INSTRUCTION_STATE;
            // calling main game function
            changeState();
        };
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map