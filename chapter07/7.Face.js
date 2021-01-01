var Face = /** @class */ (function () {
    function Face() {
        this._edge = 3;
    }
    Object.defineProperty(Face.prototype, "edge", {
        get: function () {
            return this._edge;
        },
        set: function (value) {
            this._edge = value;
        },
        enumerable: false,
        configurable: true
    });
    return Face;
}());
var face = new Face();
console.log(face.edge);
face.edge = 5;
console.log(face.edge);
