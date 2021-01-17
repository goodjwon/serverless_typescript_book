var Face = /** @class */ (function () {
    function Face(edge) {
        this.vertex = 3;
        this.edge = edge;
    }
    Face.prototype.addEdge = function () {
        this.edge++;
    };
    return Face;
}());
