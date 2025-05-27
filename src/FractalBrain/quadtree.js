class Point {
    constructor(x,y){
        this.x=x;
        this.y=y;


    }
}

class Rect {

    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    }

    contains(point){
        if(point.x >= this.x - this.w &&
            point.x < this.x + this.w &&
            point.y >=this.y - this.h &&
            point.y < this.y + this.h){
            return true;
        }
        return false;
    }

}

class QuadTree {
    constructor(boundary,capacity){
        this.boundary=boundary;
        this.capacity=capacity;
        this.points=[];
    }

    insert(point){
        if(!this.boundary.contains(point)){
            return false;
        }

    }
    
    subdivide(){

    }

    query(){

    }

    display(){
        rect(this.boundary.x, this.boundary.y,this.boundary.w * 2, this.boundary.h *2)
    }


}