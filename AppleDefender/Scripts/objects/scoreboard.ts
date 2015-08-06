module objects {
    export class ScoreBoard {
        // PUBLIC PROPERTIES
        public score: number = 0;
        public lives: number = 5;

        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;
        private temp: objects.Label;

        // CONSTRUCTOR +++++++++++++++++++
        constructor() {
            
            this.temp = new objects.Label("bob", config.FONT_MEDIUM, config.FONT_FAMILY, config.YELLOW, 0, 0);
            //game.addChild(this.scoreLabel);
        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        }
    }
} 