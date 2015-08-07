module states {
    export class GameOver {
        // PUBLIC PROPERTIES

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
            title.y = 100;
            game.addChild(title);

            // add Mail Pilot Label
            var label: objects.Label = new objects.Label("GAME OVER", config.FONT_EXTRA_LARGE,config.FONT_FAMILY, config.BLUE, canvas.clientWidth / 2, 300);
            game.addChild(label);

            var scoreLabel: objects.Label = new objects.Label("SCORE: " + score, config.FONT_MEDIUM, config.FONT_FAMILY, config.BLUE, canvas.clientWidth / 2, 500);
            game.addChild(scoreLabel);

            // start button
            btnStart = new objects.Button("start");
            btnStart.x = 540;
            btnStart.y = 600;
            btnStart.on("click", this.btnStart_Click);
            game.addChild(btnStart);

            // instruction button
            btnQuitGO = new objects.Button("quit");
            btnQuitGO.x = 740;
            btnQuitGO.y = 600;
            btnQuitGO.on("click", this.btnQuitGO_Click);
            game.addChild(btnQuitGO);

            //add game container to stage
            stage.addChild(game);
        }

        // reset play state and play again.
        private btnStart_Click() {
            // set the current state
            game.removeAllChildren();
            currentState = config.PLAY_STATE;

            // calling main game function
            changeState();
        }

        // quit to main menu;
        private btnQuitGO_Click() {
            // set the current state
            game.removeAllChildren();
            currentState = config.MENU_STATE;

            // calling main game function
            changeState();
        }
    }
}   