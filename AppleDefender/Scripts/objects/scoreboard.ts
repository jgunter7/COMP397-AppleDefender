﻿module objects {
    export class ScoreBoard {
        // PUBLIC PROPERTIES
        public score: number = 0;
        public lives: number = 5;

        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;

        // CONSTRUCTOR +++++++++++++++++++
        constructor() {
            this.livesLabel = new createjs.Text("Lives:", config.FONT_MEDIUM + " " + config.FONT_FAMILY, config.YELLOW);
            this.scoreLabel = new createjs.Text("Score:", config.FONT_MEDIUM + " " + config.FONT_FAMILY, config.YELLOW);
            this.scoreLabel.x = 350;
            game.addChild(this.livesLabel);
            game.addChild(this.scoreLabel);
        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        }
    }
} 