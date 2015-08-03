var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    var Grass = (function (_super) {
        __extends(Grass, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Grass(imageString) {
            _super.call(this, imageString);
            this.y = 0;
            this.x = 0;
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Grass.prototype.update = function () {
            // no update neaded.
        };
        return Grass;
    })(objects.GameObject);
    objects.Grass = Grass;
})(objects || (objects = {}));
//# sourceMappingURL=grass.js.map