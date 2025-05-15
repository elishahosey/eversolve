

let nodes=[];
let num =10;
let r = 100;
let insertDistance = 10;
let separationDistance = insertDistance * 2;

let quadtree; //used to organize a multidimension space
let boundary;//side of the space to use
let capacity=10;//number of points w/n subsection

function setup(){
    createCanvas(400,400);
    boundary = new rect(width/2,height/2,width/2,height/2);
    quadtree = new quadtree(boundary,capacity);

    for(let i =0;i<num;i++){
        let angle=TWO_PI / num * i
        let x=width/2 + r*cos(angle)
        let y =height/2 + r*sin(angle)
        nodes[i] = new Node(x,y);
    }
}


function draw () {
    background(220);

    for(let i =0;i<nodes.length;i++){
        let n1 = nodes[i].position;
        let n2 = nodes[(i+1) % nodes.length].position;
        line(n1.x,n1.y,n2.x,n2.y);
    }

    for(let i =0;i<nodes.length;i++){
        let range = new circle(nodes[i].position.x,nodes[i].position.y,separationDistance);
        let neighbors=[]
        quadtree.query(range,neighbors);
        nodes[i].update(nodes,neighbors);
        //  nodes[i].display();
    }

    insert();
}


function insert() {
    for( let i =0;i<nodes.length;i++){
        let n1=nodes[i].position;
        let n2=nodes[(i+1) % nodes.length].position;
        let diff=p5.Vector.sub(n2,n1);

        if(diff.mag()>insertDistance){
            diff.mult(0.5);
            let insertIndex = (i+1) % nodes.length
            nodes.splice(insertIndex,0,new Node(n1.x+diff.x,n1.y+diff.y));
        }
    }
}