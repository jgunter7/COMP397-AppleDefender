module objects {
    // BUTTON CLASS
    export class Button extends objects.GameObject {
        // CONSTRUCTOR 
        constructor(imageString: string) {
            super(imageString);


            this.on("mouseover", this.over, this);
            this.on("mouseout", this.out, this);
        }

        // PUBLIC METHODS
        // add slight transparancy when mouse is hovering over the button.
        public over(event: createjs.MouseEvent) {
            this.alpha = 0.8;
        }

        // back to normal look
        public out(event: createjs.MouseEvent) {
            this.alpha = 1.0;
        }
    }
} 