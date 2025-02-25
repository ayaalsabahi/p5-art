class Mold{
    constructor(){
        this.r = 10; //radius of the mold
        this.x = width/2; 
        this.y = width/2; 
        this.heading = 0; //angle to where it is heading in
        this.vx = cos(this.heading);
        this.vy = sin(this.heading ); 
        this.rSensorPos = createVector(); //right sensor pos    
        this.lSensorPos = createVector(); //left sensor pos
        this.mSensorPos = createVector(); //middle sensor pos
        this.sensorAngle = 45; 
        this.sensorDistance = this.r * 5; 
        
    }


    display(){
        fill(0);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
        line(this.x, this.y, this.r * 3 + this.x + this.vx, this.r * 3 + this.y + this.vy);
    }

    update(){
        this.sensorPos.x = this.x + this.sensorDistance*cos(this.heading + this.sensorAngle);
        this.sensorPos.y = this.y + this.sensorDistance*sin(this.heading + this.sensorAngle);
        fill(255,0,0);
        ellipse(this.sensorPos.x, this.sensorPos.y,this.r * 2, this.r * 2); //visualualizing the sensor

    }
}