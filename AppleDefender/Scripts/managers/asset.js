var managers;
(function (managers) {
    var Asset = (function () {
        // CONSTRUCTOR
        function Asset() {
            // PRIVATE PROPERTIES
            this.manifest = [
                { id: "loop", src: "assets/audio/bass_loop.wav" },
                { id: "die", src: "assets/audio/die.wav" },
                { id: "reload", src: "assets/audio/reload.mp3" },
                { id: "shot", src: "assets/audio/shot.wav" },
                { id: "wall_fall", src: "assets/audio/wall_fall.mp3" },
                { id: "hit", src: "assets/audio/uh.wav" },
                { id: "logo", src: "assets/images/logo.png" },
                { id: "bgin", src: "assets/images/bgin.png" }
            ];
            this.data = {
                "images": [
                    "assets/images/atlas.png"
                ],
                "frames": [
                    [1682, 721, 138, 61],
                    [1682, 904, 118, 61],
                    [1682, 842, 124, 61],
                    [1281, 1264, 172, 61],
                    [1281, 1205, 252, 58],
                    [1534, 1205, 146, 58],
                    [1454, 1264, 152, 58],
                    [1281, 1326, 100, 100],
                    [1281, 1427, 38, 9],
                    [0, 721, 1280, 720],
                    [1682, 966, 75, 75],
                    [1281, 1102, 350, 102],
                    [1281, 0, 400, 380],
                    [1682, 0, 175, 720],
                    [1281, 381, 175, 720],
                    [1457, 381, 175, 720],
                    [1533, 1326, 148, 58],
                    [1682, 783, 142, 58],
                    [1382, 1326, 150, 61],
                    [0, 0, 1280, 720]
                ],
                "animations": {
                    "pause": [0],
                    "play": [1],
                    "quit2": [2],
                    "upgrade": [3],
                    "instructions": [4],
                    "back": [5],
                    "next": [6],
                    "stick": [7],
                    "bullet": [8],
                    "bg": [9],
                    "apple": [10],
                    "gun": [11],
                    "mApple": [12],
                    "brick_wall": [13],
                    "wood_wall": [14],
                    "steel_wall": [15],
                    "start": [16],
                    "quit": [17],
                    "reload": [18],
                    "grass": [19]
                }
            };
            this.preload();
        }
        Asset.prototype.preload = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            // create texture atlas
            this.atlas = new createjs.SpriteSheet(this.data);
        };
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map