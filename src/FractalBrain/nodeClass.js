class Node {

    constructor(x,y){
        this.position = createVector(x,y);
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0,0);
        this.maxSpeed =1;
        this.maxForce = 1;

    }


    cohesion(nodes){
        let steering = createVector();
        let total =0;

        let thisIndex = nodes.indexOf(this)
        let nextIndex = (thisIndex +1) % nodes.length;
        let prevIndex = (thisIndex -1 + nodes.length) % nodes.length;
        steering.add(nodes[nextIndex].position);
        steering.add(nodes[prevIndex].position);
        total += 2;

        if(total > 0){
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }
    
    separation(neighbors){
        let steering = createVector();
        let total = 0;
        
        for(let i=0;i<neighbors.length;i++){
            let distance = dist(this.position.x,this.position.y,neighbors[i].position.x,neighbors[i].position.y)
            if(this !=neighbors[i] && distance < separationDistance){
                let diff = p5.Vector.sub(this.position,neighbors[i].position);
                diff.div(distance * distance);
                steering.add(diff);
                total +=1;

            }
        }

        if(total > 0){
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);

        }
        return steering;
    }
    


    update(nodes,neighbors){
        let separation = this.separation(neighbors)
        let cohesion = this.cohesion(nodes);


        this.acceleration.add(separation);
        this.acceleration.add(cohesion);


        this.velocity.add(this.acceleration);
        this.velocity.setMag(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    display(){
        fill(0);
        ellipse(this.position.x, this.position.y,5,5)
    }

}