var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Avatar Class ++++++++++++++++++++++++++++++++++++++
    var Avatar = (function (_super) {
        __extends(Avatar, _super);
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Avatar(imageString) {
            _super.call(this, imageString);
            this._init(); // initialize avatar
            this._assignControls();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++
        Avatar.prototype._init = function () {
            this.x = 320;
            this.y = 240;
            this.turnRate = config.PLAYER_TURN_RATE;
            this.speed = 0;
            this.direction = 90;
            this.dx = 0;
            this.dy = 0;
        };
        // Bind key actions to player events
        Avatar.prototype._assignControls = function () {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        };
        // Switch statement to activate movement and rotation
        Avatar.prototype._onControlDown = function (event) {
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
        };
        // switch statement to reset controls
        Avatar.prototype._onControlUp = function (event) {
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
        };
        // Respond to player key presses
        Avatar.prototype._controlAction = function () {
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
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Avatar.prototype.update = function () {
            this._controlAction();
            this.calcVector();
            this.calcPosition();
        };
        return Avatar;
    })(objects.GameObject);
    objects.Avatar = Avatar;
})(objects || (objects = {}));
//# sourceMappingURL=avatar.js.map