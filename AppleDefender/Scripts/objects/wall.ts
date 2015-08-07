module objects {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    export class Wall extends objects.GameObject {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        public health: number;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            
            this.sound = "wall_fall";
            this.name = "wall";
        }
        
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public SetUpWall(x: number, y: number, h: number): void {
            this.x = x;
            this.y = y;
            this.health = h; //init wall object with data.
        }
        
        public update() {
            if (this.health <= 0)
                play.GameOver(); // show game over screen, stop music etc.
        }        
    }
}  