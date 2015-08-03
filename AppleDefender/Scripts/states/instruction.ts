module states {
    export class Instruction{


        //CONSTRUCTOR
        constructor() {
            this.main();
        }


        // PUBLIC METHODS
        // update method
        public update() {

        }

        // destroy method
        public destroy() {
            game.removeAllChildren();
        }


        // main method
        public main() {
        // instantiate new game container
        game = new createjs.Container();

        // instantiate avatar and add it to the game container

        // instantiate my bullet manager object
        bulletManager = new managers.BulletManager();


        //add game container to stage
        stage.addChild(game);
    }
    }
} 