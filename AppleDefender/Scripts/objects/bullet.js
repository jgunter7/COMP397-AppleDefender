var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Bullet Class
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            _super.call(this, "bullet");
            this.init();
            game.addChild(this);
        }
        // PUBLIC METHODS
        Bullet.prototype.init = function () {
            this.direction = avatar.direction;
            this.speed = config.BULLET_SPEED;
            this.x = avatar.x;
            this.y = avatar.y;
        };
        Bullet.prototype.update = function () {
            this.calcVector();
            this.calcPosition();
        };
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map