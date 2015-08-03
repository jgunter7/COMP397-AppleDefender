var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    var Gun = (function (_super) {
        __extends(Gun, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Gun(imageString) {
            _super.call(this, imageString);
            this.sound = "shot";
            this.y = (canvas.clientHeight / 2) - (this.getBounds().height);
            this.x = canvas.clientWidth * 0.75;
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Gun.prototype.update = function () {
            //this.x = stage.mouseX; // position plane under mouse
            var mx = stage.mouseX;
            var my = stage.mouseY;
            var angle = Math.atan2(my - this.y, mx - this.x);
            angle = angle * (180 / Math.PI);
            angle = angle + 180;
            //if (angle > 270 || angle < 90)
            this.rotation = angle;
            this.direction = angle;
        };
        return Gun;
    })(objects.GameObject);
    objects.Gun = Gun;
})(objects || (objects = {}));
//# sourceMappingURL=gun.js.map