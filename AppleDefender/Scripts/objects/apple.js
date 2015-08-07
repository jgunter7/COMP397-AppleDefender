var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Apple Class
    var Apple = (function (_super) {
        __extends(Apple, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++
        function Apple(imageString) {
            _super.call(this, imageString);
            this.sound = "hit";
            this.dieSound = "die";
            this.eating = false;
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Apple.prototype.SetUpApple = function (health, speed) {
            this.health = health;
            this.speed = speed;
            //y = between 0 and 520 - height
            //x = -width and -500
            this.y = Math.floor(Math.random() * (520 - 5 + 1)) + 5;
            this.x = -1 * (Math.floor(Math.random() * (this.GetMaxOffScreen() - 50 + 1)) + 50);
        };
        Apple.prototype.GetMaxOffScreen = function () {
            var wave = apples.length / 10;
            var num = (((wave - 1) * 100) + 1000);
            return num;
        };
        // move closer or attack the wall.
        Apple.prototype.update = function () {
            this.CheckHealth();
            this.CheckBounds();
            if (!this.eating)
                this.x += this.speed; // move apple towards the wall.
            else {
                wall.health -= 0.01; // else: decrease wall health.
            }
        };
        // check if apple is attacking or moving closer.
        Apple.prototype.CheckBounds = function () {
            var max = (canvas.clientWidth * 0.75) - (wall.getTransformedBounds().width / 2) - (this.getTransformedBounds().width / 2);
            if (this.x >= max)
                this.eating = true;
        };
        // check each apple's helth.
        Apple.prototype.CheckHealth = function () {
            if (this.health <= 0)
                this.DestroyApple();
        };
        // remove apple from list of apples.
        Apple.prototype.DestroyApple = function () {
            createjs.Sound.play(this.dieSound);
            score += 25; // 25 score for each kill.
            money += 50; // $50 for each kill
            var len = apples.length;
            // remove apple from game and from apple array
            for (var count = 0; count < len; count++) {
                if (apples[count] == this) {
                    apples.splice(count, 1);
                    game.removeChild(this);
                }
            }
        };
        return Apple;
    })(objects.GameObject);
    objects.Apple = Apple;
})(objects || (objects = {}));
//# sourceMappingURL=apple.js.map