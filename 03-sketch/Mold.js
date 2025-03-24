class Mold{
   
    constructor(){
        this.r = 0.5; //radius of the mold
        this.x = random(width);
        this.y = random(height);
        this.heading = random(360); //angle to where it is heading in
        this.rotAngle = 45; //rotation angle of the thingy
        this.vx = cos(this.heading);
        this.vy = sin(this.heading); 
        this.rSensorPos = createVector(); //right sensor pos    
        this.lSensorPos = createVector(); //left sensor pos
        this.mSensorPos = createVector(); //middle sensor pos
        this.sensorAngle = 45; 
        this.sensorDistance = 10; 
        this.slimeColor = color(255,255,255); 
        this.isHeading = false; 
        
    }


    display(){
        // fill(floor(random(0,255)),random(0,255),random(0,255));
        fill(this.slimeColor);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    //    this.visualizeSensor();
       
    }

    update(){
        this.vx = cos(this.heading);
        this.vy = sin(this.heading); 

        this.x = this.x + this.vx; 
        this.y = this.y + this.vy; 

        this.getSensorPos(this.rSensorPos, this.heading + this.sensorAngle); 
        this.getSensorPos(this.lSensorPos, this.heading - this.sensorAngle); 
        this.getSensorPos(this.mSensorPos, this.heading); 

        //sensing/detecting the background for the different sensors
        this.detectDirection();
        
    }


    //get sensor position
    getSensorPos(sensor, angle){
        sensor.x = (this.x + this.sensorDistance*cos(angle) + width) % width; //+ sensor angle
        sensor.y = (this.y + this.sensorDistance*sin(angle) + height) % height;
    }

   

    
    detectDirection(){
        let index, l, r, m;  
        index = 4*(d * floor(this.rSensorPos.y)) * (d * width) + 4*(d * floor(this.rSensorPos.x)); //using 4 due to the offset of the array 
        r = pixels[index]; 
        index = 4*(d * floor(this.lSensorPos.y)) * (d * width) + 4*(d * floor(this.lSensorPos.x));
        l = pixels[index]; 
        index = 4*(d * floor(this.mSensorPos.y)) * (d * width) + 4*(d * floor(this.mSensorPos.x)); 
        m = pixels[index]; 
        //here we will check conditions of where to head to 

        //if the position of the mouse is anwhere within the radius
        //AND if I am not heading out already 
        //THEN reverse directions
        let mouseDist = dist(this.x, this.y, mouseX, mouseY); 
        if(mouseDist <= mouseRadius && !this.isHeading){
            this.isHeading= true; 
            this.heading -= 180 + random(-10, 10);
        }
        else{this.isHeading = false;}

        //if I'm not already heading out
        if(!this.isHeading){
            if(m > l && m > l){
                this.heading+=0; //no change in angle direction, continue going where you are    
            }
            else if(m < l && m < r){
                 if(random(1) < 0.5){ //random choice
                    this.heading+= this.rotAngle; 
                 }
            }
            else if(l > r){
                this.heading -= this.rotAngle; //go left   
            }
            else if(r > l){
                this.heading += this.rotAngle;//go right
               
            }
            
        }

    }

    //testing code
    visualizeSensor(){
    
    fill(255);
    line(this.x, this.y, this.r * 5 * this.vx + this.x , this.r * 5 *this.vy + this.y );
    ellipse(this.rSensorPos.x, this.rSensorPos.y,this.r * 2, this.r * 2); //visualualizing the sensor
    ellipse(this.lSensorPos.x, this.lSensorPos.y,this.r * 2, this.r * 2); //visualualizing the sensor
    ellipse(this.mSensorPos.x, this.mSensorPos.y,this.r * 2, this.r * 2); //visualualizing the sensor
   }
}