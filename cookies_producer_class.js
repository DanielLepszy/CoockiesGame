var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProductionOfCoockiesByProducer = /** @class */ (function () {
    function ProductionOfCoockiesByProducer() {
    }
    return ProductionOfCoockiesByProducer;
}());
var Producer = /** @class */ (function (_super) {
    __extends(Producer, _super);
    function Producer(NameOfProducer, CoockiesPerSecond, CostOfProducer) {
        var _this = _super.call(this) || this;
        _this.NameOfProducer = NameOfProducer;
        _this.CoockiesPerSecond = CoockiesPerSecond;
        _this.CostOfSingleProducer = CostOfProducer;
        console.log("Name: " + NameOfProducer);
        return _this;
    }
    Producer.prototype.wholeProduction = function (CoockiesPerSecond, AmountOfPurchasedProducers) {
        this.WholeProductionOfCoockiesByAllProducer = CoockiesPerSecond * CoockiesPerSecond;
        return this.WholeProductionOfCoockiesByAllProducer;
    };
    return Producer;
}(ProductionOfCoockiesByProducer));
var GlobalProductionOfCoockies = /** @class */ (function () {
    function GlobalProductionOfCoockies() {
        this.CurrentAmountOfCookies = 0;
    }
    return GlobalProductionOfCoockies;
}());
var cursor = new Producer("Cursor", 1, 100);
var grandma = new Producer("Grandma", 3, 300);
var farm = new Producer("Cursor", 10, 1000);
var NameOfProducer = document.getElementById("producerInfo").getElementsByTagName("p")[0];
var placeForAllCockies = document.getElementById("globalProduction").getElementsByTagName("p")[0];
var placeForGlobalProductionPerSecond = document.getElementById("globalProduction").getElementsByTagName("p")[3];
var globalProduction = new GlobalProductionOfCoockies();
var addCoockieOnClick = function () {
    globalProduction.CurrentAmountOfCookies = parseFloat(placeForAllCockies.textContent);
    globalProduction.CurrentAmountOfCookies = globalProduction.CurrentAmountOfCookies + 1;
    placeForAllCockies.innerHTML = globalProduction.CurrentAmountOfCookies.toString();
};
