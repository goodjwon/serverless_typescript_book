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
var Face = /** @class */ (function () {
    function Face(edge) {
        this.edge = edge;
    }
    return Face;
}());
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        return _super.call(this, 4) || this;
    }
    return Rect;
}(Face));
var rect = new Rect();
console.log(rect.edge);
