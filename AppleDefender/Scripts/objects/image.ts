module objects {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    export class Image extends objects.GameObject {
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++
        engineSound: createjs.AbstractSoundInstance;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
        }
        
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public SetPosition(x: number, y: number): void {
            this.x = x;
            this.y = y; // set position, createjs.bitmap may be easier to use, or Sprite.
        }
    }
}  