var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    var Image = (function (_super) {
        __extends(Image, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Image(imageString) {
            _super.call(this, imageString);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Image.prototype.SetPosition = function (x, y) {
            this.x = x;
            this.y = y; // set position, createjs.bitmap may be easier to use, or Sprite.
        };
        return Image;
    })(objects.GameObject);
    objects.Image = Image;
})(objects || (objects = {}));
//# sourceMappingURL=image.js.map