var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    var Wall = (function (_super) {
        __extends(Wall, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Wall(imageString) {
            _super.call(this, imageString);
            this.sound = "wall_fall";
            this.name = "wall";
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Wall.prototype.SetUpWall = function (x, y, h) {
            this.x = x;
            this.y = y;
            this.health = h; //init wall object with data.
        };
        Wall.prototype.update = function () {
            if (this.health <= 0)
                play.GameOver(); // show game over screen, stop music etc.
        };
        return Wall;
    })(objects.GameObject);
    objects.Wall = Wall;
})(objects || (objects = {}));
//# sourceMappingURL=wall.js.map