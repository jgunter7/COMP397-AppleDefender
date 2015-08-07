module objects {
    // LABEL Class
    export class Label extends createjs.Text {
        // CONSTRUCTOR 
        constructor(labelString: string, fontSize: string, fontFamily: string, fontColour: string, x: number, y: number) {
            super(labelString, fontSize + " " + fontFamily, fontColour);

            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;

            this.x = x;
            this.y = y;

        }
    }
} 