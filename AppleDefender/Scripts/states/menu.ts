module states {
    export class Menu {
        // PUBLIC PROPERTIES
        public playButton: objects.Button;

        //CONSTRUCTOR
        constructor() {
            this.main();
        }


        // PUBLIC METHODS
        // update method
        public update() {

        }

        public playClick(event: createjs.MouseEvent) {
            this.destroy();
            currentState = config.PLAY_STATE;
            changeState();
            this.playButton.off("click", this.playClick);
        }

        // destroy method
        public destroy() {
            //plane.engineSound.stop();
            game.removeAllChildren();
        }

        // main method
        public main() {
            // instantiate new game container
            game = new createjs.Container();

            //add ocean object to stage
            //ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            //game.addChild(ocean);

            // add Mail Pilot Label
            var label: objects.Label = new objects.Label("Mail Pilot", config.FONT_EXTRA_LARGE, config.FONT_FAMILY, config.YELLOW, 320, 140);
            game.addChild(label);

            // add play button to stage
            //this.playButton = new objects.Button("playButton");
            //this.playButton.x = 320;
            //this.playButton.y = 340;
            //game.addChild(this.playButton);

            //this.playButton.on("click", this.playClick, this);


            //add game container to stage
            stage.addChild(game);
        }
    }
}  