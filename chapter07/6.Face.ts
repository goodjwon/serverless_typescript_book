class Face {
    readonly vertex: number = 3;
    readonly edge: number;

    constructor(edge: number) {
        this.edge = edge;
    }

    public addEdge(){
        //this.edge ++; //TS2540: Cannot assign to 'edge' because it is a read-only property.
    }
}