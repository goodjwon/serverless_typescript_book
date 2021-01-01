var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Face5 = /** @class */ (function () {
    function Face5(edge) {
        this.edge = edge;
    }
    Face5.prototype.addEdge = function () {
        this.edge++;
    };
    Face5.prototype.getEdge = function () {
        return this.edge;
    };
    Face5.prototype.getEdges = function () {
        return this.edge;
    };
    return Face5;
}());
var Rect5 = /** @class */ (function (_super) {
    __extends(Rect5, _super);
    function Rect5() {
        return _super.call(this, 4) || this;
    }
    return Rect5;
}(Face5));
var rect = new Rect5();
console.log(rect.getEdge());
//console.log(rect.getEdges()) //TS2445: Property 'getEdges' is protected and only accessible within class 'Face5' and its subclasses.
