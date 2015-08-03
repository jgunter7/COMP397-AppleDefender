module objects {
    // Avatar Class ++++++++++++++++++++++++++++++++++++++
    export class Avatar extends objects.GameObject {
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this._init(); // initialize avatar
            this._assignControls();
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++
        private _init() {
            this.x = 320;
            this.y = 240;
            this.turnRate = config.PLAYER_TURN_RATE;
            this.speed = 0;
            this.direction = 90;
            this.dx = 0;
            this.dy = 0;
        }

        // Bind key actions to player events
        private _assignControls() {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        }

        // Switch statement to activate movement and rotation
        private _onControlDown(event: KeyboardEvent) {
            switch (event.keyCode) {
                case config.KEY_A:
                    config.TURN_LEFT = true;
                    break;
                case config.KEY_D:
                    config.TURN_RIGHT = true;
                    break;
                case config.KEY_W:
                    config.FORWARD = true;
                    break;
                case config.KEY_S:
                    config.REVERSE = true;
                    break;
                case config.KEY_SPACE:
                    config.FIRING = true;
                    break;
            }
        }

        // switch statement to reset controls
        private _onControlUp(event: KeyboardEvent) {
            switch (event.keyCode) {
                case config.KEY_A:
                    config.TURN_LEFT = false;
                    break;
                case config.KEY_D:
                    config.TURN_RIGHT = false;
                    break;
                case config.KEY_W:
                    config.FORWARD = false;
                    break;
                case config.KEY_S:
                    config.REVERSE = false;
                    break;
                case config.KEY_SPACE:
                    config.FIRING = false;
                    break;
            }
        }

        // Respond to player key presses
        private _controlAction() {
            // Execute turn left
            if (config.TURN_LEFT) {
            }

            // Execute turn right
            if (config.TURN_RIGHT) {
            }

            // Forward Movement
            if (config.FORWARD) {
                this.speed = config.PLAYER_FORWARD;
            }

            // Reverse Movement
            if (config.REVERSE) {
                this.speed = -config.PLAYER_REVERSE;
            }

            // Forward Stop
            if ((config.FORWARD == false) && (config.REVERSE == false)) {
                this.speed = 0;
            }

        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this._controlAction();
            this.calcVector();
            this.calcPosition();
        }
    }
} 