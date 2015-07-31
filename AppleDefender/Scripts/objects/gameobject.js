var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function GameObject(imageString) {
            _super.call(this, assets.atlas, imageString);
            this.isColliding = false;
            this.sound = "";
            this.name = "";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Calculate the game object's new x and y coordinates
        GameObject.prototype.calcVector = function () {
            var radians = this.direction * (Math.PI / 180);
            this.dx = this.speed * Math.cos(radians);
            this.dy = this.speed * Math.sin(radians);
            this.dy *= -1;
        };
        // Calculate the game object's new position
        GameObject.prototype.calcPosition = function () {
            this.x += this.dx;
            this.y += this.dy;
        };
        // Turn Left Method
        GameObject.prototype.turnLeft = function () {
            this.rotation -= this.turnRate;
            this.direction += this.turnRate;
            if (this.direction > 360) {
                this.direction = this.turnRate;
            }
        };
        // Turn Right Method
        GameObject.prototype.turnRight = function () {
            this.rotation += this.turnRate;
            this.direction -= this.turnRate;
            if (this.direction < 0) {
                this.direction = 360 - this.turnRate;
            }
        };
        // slide Left Method
        GameObject.prototype.slideLeft = function () {
            this.x -= config.PLAYER_SLIDE;
        };
        // slide Right Method
        GameObject.prototype.slideRight = function () {
            this.x += config.PLAYER_SLIDE;
        };
        return GameObject;
    })(createjs.Sprite);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map