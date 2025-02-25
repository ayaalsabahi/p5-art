class Mold{
    constructor(){
        this.r = 10; //radius of the mold
        this.x = random(width);
        this.y = random(height);
        this.heading = random(360); //angle to where it is heading in
        this.rotAngle = 45; //rotation angle of the thingy
        this.vx = cos(this.heading);
        this.vy = sin(this.heading ); 
        this.rSensorPos = createVector(); //right sensor pos    
        this.lSensorPos = createVector(); //left sensor pos
        this.mSensorPos = createVector(); //middle sensor pos
        this.sensorAngle = 45; 
        this.sensorDistance = this.r * 10; 
        
    }


    display(){
        fill(0);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
        line(this.x, this.y, this.r * 5 * this.vx + this.x , this.r * 5 *this.vy + this.y );

        fill(255,0,0);
        ellipse(this.rSensorPos.x, this.rSensorPos.y,this.r * 2, this.r * 2); //visualualizing the sensor
        ellipse(this.lSensorPos.x, this.lSensorPos.y,this.r * 2, this.r * 2); //visualualizing the sensor
        ellipse(this.mSensorPos.x, this.mSensorPos.y,this.r * 2, this.r * 2); //visualualizing the sensor
    }

    update(){
        this.vx = cos(this.heading);
        this.vy = sin(this.heading); 

        this.x = this.x + this.vx; 
        this.y = this.y + this.vy; 

        this.rSensorPos.x = this.x + this.sensorDistance*cos(this.heading + this.sensorAngle); //+ sensor angle
        this.rSensorPos.y = this.y + this.sensorDistance*sin(this.heading + this.sensorAngle);
        
        this.lSensorPos.x = this.x + this.sensorDistance*cos(this.heading - this.sensorAngle);//- sensor angle
        this.lSensorPos.y = this.y + this.sensorDistance*sin(this.heading - this.sensorAngle);

        this.mSensorPos.x = this.x + this.sensorDistance*cos(this.heading); //just straight up in the middle
        this.mSensorPos.y = this.y + this.sensorDistance*sin(this.heading);

        //sensing/detecting the background
        let index, l, r, m;  
        index = 4*(d * floor(this.rSensorPos.y)) * (d * width) + 4*(d * floor(this.rSensorPos.x)); //using 4 due to the offset of the array 
        r = pixels[index]; 
        index = 4*(d * floor(this.lSensorPos.y)) * (d * width) + 4*(d * floor(this.lSensorPos.x));
        l = pixels[index]; 
        index = 4*(d * floor(this.mSensorPos.y)) * (d * width) + 4*(d * floor(this.mSensorPos.x)); 
        m = pixels[index]; 
        

        //here we will check conditions of where to head to 
        if(m > l && m > l){
            this.heading+=0; //no change in angle direction, continue going where you are
        }
        else if(m < l && m < r){
             if(random(1) < 0.5){
                this.heading+= this.rotAngle; 
             }
        }
        else if(l > r){
            this.heading -= this.rotAngle;
        }
        else if(r > l){
            this.heading += this.rotAngle;
        }


    }
}