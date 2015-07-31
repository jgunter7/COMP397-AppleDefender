module objects {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    export class Plane extends objects.GameObject {
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++
        engineSound: createjs.AbstractSoundInstance;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            //this.sound = "engine";

            this.y = 250;
            this.x = 500;

            //this.engineSound = createjs.Sound.play(this.sound, { "loop": -1 });
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            //this.x = stage.mouseX; // position plane under mouse
            var mx = stage.mouseX;
            var my = stage.mouseY;
            var angle = Math.atan2(my - this.y, mx - this.x);
            angle = angle * (180 / Math.PI);
            this.rotation = angle;
        }
    }
} 