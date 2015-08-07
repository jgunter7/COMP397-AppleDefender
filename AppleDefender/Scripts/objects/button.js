var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // BUTTON CLASS
    var Button = (function (_super) {
        __extends(Button, _super);
        // CONSTRUCTOR 
        function Button(imageString) {
            _super.call(this, imageString);
            this.on("mouseover", this.over, this);
            this.on("mouseout", this.out, this);
        }
        // PUBLIC METHODS
        // add slight transparancy when mouse is hovering over the button.
        Button.prototype.over = function (event) {
            this.alpha = 0.8;
        };
        // back to normal look
        Button.prototype.out = function (event) {
            this.alpha = 1.0;
        };
        return Button;
    })(objects.GameObject);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map