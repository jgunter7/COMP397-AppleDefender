module objects {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    export class Gun extends objects.GameObject {
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++
        public maxClip: number = 10;
        public clip: number = 10;
        public reloadTime: number = 5;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.sound = "shot";
            this.y = (canvas.clientHeight / 2) - (this.getBounds().height);
            this.x = canvas.clientWidth * 0.75;
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            // calc gun direction and rotation.
            var mx = stage.mouseX;
            var my = stage.mouseY;
            var angle = Math.atan2(my - this.y, mx - this.x);
            angle = angle * (180 / Math.PI);
            angle = angle + 180;
            //if (angle > 270 || angle < 90)
            this.rotation = angle;
            this.direction = angle;
        }
    }
}  