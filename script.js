// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 3000; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }

}


function draw() {
  background(50);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    p.bound();

    
    
  }
  if(particles.length ==0){
    for (let i = 0; i < NUM_OF_PARTICLES; i++) {
      particles[i] = new Particle(random(width), random(-height, 0));
}
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.xSpd= random(0, 0.8);
    this.ySpd= random(0.5,2 );
    this.dia = random(3,6);
    this.dir=1
    this.clr = [random(200, 255), random(200, 255), 0] 
    this.startY = startY;
  }
  // methods (functions): particle's behaviors
  update() {
    this.x += this.xSpd * this.dir;
        this.y = this.startY + sin(frameCount * 0.05) * 50;
        if (this.x >= width || this.y >= height) {
          this.clr = [random(0, 255), random(0, 255), random(0, 255)];
        }
    
  
}
  
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    fill(this.clr)
    beginShape();
    for (let i = 0; i < TWO_PI; i += TWO_PI / 10) {
        let x = this.x + cos(i) * this.dia;
        let y = this.y + sin(i) * this.dia;
        vertex(x, y);
        let angleBetweenPoints = PI / 5;
        x = this.x + cos(i + angleBetweenPoints) * (this.dia / 2);
        y = this.y + sin(i + angleBetweenPoints) * (this.dia / 2);
        vertex(x, y);
    }
    endShape(CLOSE);

    pop();
  }
  bound() {
    if (this.x <= width|| this.y >= height) {
      this.dir *= -1; 
    }
      if( this.x>=width|| this.y<=height){
      this.dir *=1
    }



}
}
