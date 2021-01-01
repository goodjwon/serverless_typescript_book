class Face5 {
    private edge: number;

    constructor(edge: number) {
        this.edge = edge;
    }

    public addEdge(){
        this.edge++;
    }

    public getEdge(){
        return this.edge;
    }

    protected getEdges(){
        return this.edge;
    }
}

class Rect5 extends Face5 {
    constructor() {
        super(4);
    }
}

const rect = new Rect5();
console.log(rect.getEdge())
//console.log(rect.getEdges()) //TS2445: Property 'getEdges' is protected and only accessible within class 'Face5' and its subclasses.