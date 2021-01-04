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
var Character = /** @class */ (function () {
    function Character(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }
    return Character;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name, hp, damage) {
        var _this = _super.call(this, name, hp, damage) || this;
        _this.power = 0.2;
        return _this;
    }
    Player.prototype.powerUp = function (power) {
        this.power = this.power + power;
    };
    Player.prototype.hit = function (target) {
        target.hp = target.hp - (this.damage * this.power);
        return target.hp;
    };
    return Player;
}(Character));
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(name, hp, damage) {
        return _super.call(this, name, hp, damage) || this;
    }
    Enemy.prototype.hit = function (target) {
        target.hp = target.hp - this.damage;
        return target.hp;
    };
    return Enemy;
}(Character));
var player = new Player('영웅', 100, 5);
var goblin = new Enemy('고블린', 20, 7);
player.hit(goblin);
goblin.hit(player);
console.log(player.hp);
console.log(goblin.hp);
