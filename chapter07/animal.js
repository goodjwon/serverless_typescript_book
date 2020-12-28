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
var Animal = /** @class */ (function () {
    function Animal(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    Animal.prototype.info = function () {
        return this.name + "\uB294 \uB2E4\uB9AC\uAC00 " + this.legs + "\uC774\uB2E4.";
    };
    Animal.prototype.move = function (meters) {
        return this.name + "\uAC00  " + meters + "\uBBF8\uD130\uB97C \uC6C0\uC9C1\uC600\uB2E4..";
    };
    return Animal;
}());
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, legs) {
        if (legs === void 0) { legs = 0; }
        return _super.call(this, name, legs) || this;
    }
    return Fish;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, legs) {
        return _super.call(this, name, legs) || this;
    }
    Dog.prototype.brak = function (sound) {
        return sound + " " + sound;
    };
    return Dog;
}(Animal));
var dog = new Dog('멍멍이', 4);
console.log(dog.info());
console.log(dog.brak('멍!'));
var fish = new Fish('니모');
console.log(fish.move(10));
