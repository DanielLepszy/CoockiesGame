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
        _this.AmountOfPurchasedProducers = 0;
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
var cursor = new Producer("Cursor", 1, 10);
var grandma = new Producer("Grandma", 3, 300);
var farm = new Producer("Cursor", 10, 1000);
var NameOfProducer = document.getElementById("producerInfo").getElementsByTagName("p")[0];
var placeForAllCockies = document.getElementById("globalProduction").getElementsByTagName("p")[0];
var placeForGlobalProductionPerSecond = document.getElementById("globalProduction").getElementsByTagName("p")[3];
var globalProduction = new GlobalProductionOfCoockies();
var addCoockieOnClick = function () {
    globalProduction.CurrentAmountOfCookies = parseFloat(placeForAllCockies.textContent);
    globalProduction.CurrentAmountOfCookies++;
    placeForAllCockies.innerHTML = globalProduction.CurrentAmountOfCookies.toString();
    ifProducerIsAvaibilityToBuy();
};
var purchaseCursorProducer = function () {
    if (globalProduction.CurrentAmountOfCookies >= 10) {
        var placeForAmountOfCursor = document.getElementById("producersOfCookies").getElementsByTagName("div")[0].getElementsByTagName("p")[1];
        cursor.AmountOfPurchasedProducers++;
        placeForAmountOfCursor.innerHTML = cursor.AmountOfPurchasedProducers.toString();
        globalProduction.CurrentAmountOfCookies -= 10;
        placeForAllCockies.innerHTML = globalProduction.CurrentAmountOfCookies.toString();
        ifProducerIsAvaibilityToBuy();
    }
};
var producerInfoArray = function () {
    var producerInformationArray;
    var placeForNameOfProducer = document.getElementById("producerInfo").getElementsByTagName("p")[0];
    var placeForProductionOfCursor = document.getElementById("producerInfo").getElementsByTagName("p")[1];
    var placeForProductionOfAllCursors = document.getElementById("producerInfo").getElementsByTagName("p")[2];
    var placeForAmountOfAllCursors = document.getElementById("producerInfo").getElementsByTagName("p")[3];
    producerInformationArray = [placeForNameOfProducer, placeForProductionOfCursor, placeForProductionOfAllCursors, placeForAmountOfAllCursors];
    return producerInformationArray;
};
var cursorProductionPerSecond = function () {
    var producerInformationArray = producerInfoArray();
    var productionOfAllCursor = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond);
    globalProduction.CurrentAmountOfCookies += productionOfAllCursor;
    console.log(globalProduction.CurrentAmountOfCookies);
    producerInformationArray[0] = cursor.NameOfProducer;
    producerInformationArray[1] = cursor.CoockiesPerSecond.toString();
    producerInformationArray[2].textContent = productionOfAllCursor.toString();
    producerInformationArray[3] = cursor.AmountOfPurchasedProducers.toString();
};
var showCursorInfo = function () {
    var producerInformationArray = producerInfoArray();
    var productionOfAllCursor = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond);
    producerInformationArray[0].innerHTML = cursor.NameOfProducer;
    producerInformationArray[1].innerHTML = "Each " + cursor.NameOfProducer + " produce: " + cursor.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllCursor.toString() + " Cursors produce " + productionOfAllCursor;
    producerInformationArray[3].innerHTML = "Amount producer: " + cursor.AmountOfPurchasedProducers.toString();
};
var productionOfEachProducerPerSecond = function () {
    setInterval(cursorProductionPerSecond, 1000);
};
var ifProducerIsAvaibilityToBuy = function () {
    possibilityToBuyProducer();
    impossibilityToBuyProducer();
};
var possibilityToBuyProducer = function () {
    var AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    var singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img");
    if (AmountOfAllCookies >= 10) {
        singleImageProducer[0].style.filter = "brightness(100%)";
        singleImageProducer[0].style.cursor = "pointer";
    }
    else if (AmountOfAllCookies >= 100) {
        singleImageProducer[1].style.filter = "brightness(100%)";
        singleImageProducer[1].style.cursor = "pointer";
    }
    else if (AmountOfAllCookies >= 1000) {
        singleImageProducer[2].style.filter = "brightness(100%)";
        singleImageProducer[2].style.cursor = "pointer";
    }
    else if (AmountOfAllCookies >= 10000) {
        singleImageProducer[3].style.filter = "brightness(100%)";
        singleImageProducer[3].style.cursor = "pointer";
    }
    else if (AmountOfAllCookies >= 100000) {
        singleImageProducer[4].style.filter = "brightness(100%)";
        singleImageProducer[4].style.cursor = "pointer";
    }
};
var impossibilityToBuyProducer = function () {
    var AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    var singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img");
    if (AmountOfAllCookies < 10) {
        singleImageProducer[0].style.filter = "brightness(15%)";
        singleImageProducer[0].style.cursor = "context-menu";
    }
    else if (AmountOfAllCookies < 100) {
        singleImageProducer[1].style.filter = "brightness(15%)";
        singleImageProducer[1].style.cursor = "context-menu";
    }
    else if (AmountOfAllCookies < 1000) {
        singleImageProducer[2].style.filter = "brightness(15%)";
        singleImageProducer[2].style.cursor = "context-menu";
    }
    else if (AmountOfAllCookies < 10000) {
        singleImageProducer[3].style.filter = "brightness(15%)";
        singleImageProducer[3].style.cursor = "context-menu";
    }
    else if (AmountOfAllCookies < 100000) {
        singleImageProducer[4].style.filter = "brightness(15%)";
        singleImageProducer[4].style.cursor = "context-menu";
    }
};
