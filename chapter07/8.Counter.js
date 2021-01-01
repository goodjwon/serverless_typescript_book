var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.increse = function () {
        this.count++;
    };
    Counter.count = 0;
    return Counter;
}());
Counter.increse();
console.log(Counter.count);
Counter.increse();
console.log(Counter.count);
