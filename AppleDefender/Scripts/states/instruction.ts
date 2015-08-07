module states {
    export class Instruction {

        //CONSTRUCTOR
        constructor() {
            this.main();
        }

        // PUBLIC METHODS
        // update method
        public update() {

        }

        // main method
        public main() {
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
        }

        // start game;
        private btnStart_Click() {
            // set the current state
            game.removeAllChildren();
            currentState = config.PLAY_STATE;

            // calling main game function
            changeState();
        }

        // quit to main menu.
        private btnQuitGO_Click() {
            // set the current state
            game.removeAllChildren();
            currentState = config.MENU_STATE;

            // calling main game function
            changeState();
        }
    }
} 