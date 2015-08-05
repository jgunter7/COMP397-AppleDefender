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
            this.direction = gunner.direction;
            this.speed = config.BULLET_SPEED;
            this.x = gunner.x;
            this.y = gunner.y;
        };
        Bullet.prototype.update = function () {
            this.CheckCollision();
            this.calcVector();
            this.calcPosition();
        };
        Bullet.prototype.CheckCollision = function () {
            for (var apple = 0; apple < apples.length; apple++) {
                if (this.getTransformedBounds().intersects(apples[apple].getTransformedBounds())) {
                    apples[apple].health--;
                    this.destroy();
                    if (apples[apple].health > 0)
                        createjs.Sound.play(apples[apple].sound);
                    else
                        apples[apple].DestroyApple();
                }
            }
        };
        Bullet.prototype.destroy = function () {
            bulletManager._destroyBullet(this);
        };
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map