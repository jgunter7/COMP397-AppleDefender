module objects {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    export class Gun extends objects.GameObject {
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++
        public clip: number = 30;
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
            //this.x = stage.mouseX; // position plane under mouse
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