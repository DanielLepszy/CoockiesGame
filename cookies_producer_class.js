"use strict";
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
exports.__esModule = true;
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
        this.GlobalProductionPerSecond = 0;
    }
    return GlobalProductionOfCoockies;
}());
var cursor = new Producer("Cursor", 1, 10);
var grandma = new Producer("Grandma", 3, 300);
var farm = new Producer("Cursor", 10, 1000);
var factory = new Producer("Factory", 40, 2000);
var rocket = new Producer("Rocket", 75, 4000);
var planet = new Producer("Planet", 100, 6000);
var globalProduction = new GlobalProductionOfCoockies();
var addCoockieOnClick = function () {
    globalProduction.CurrentAmountOfCookies++;
    showGlobalProduction();
    ifProducerIsAvaibilityToBuy();
};
var purchaseCursorProducer = function () {
    var increaseCostOfCursors = (cursor.AmountOfPurchasedProducers * cursor.CostOfSingleProducer) * 0.33;
    if (globalProduction.CurrentAmountOfCookies >= (10 + increaseCostOfCursors)) {
        cursor.AmountOfPurchasedProducers++;
        globalProduction.CurrentAmountOfCookies -= 10;
        ifProducerIsAvaibilityToBuy();
        showGlobalProductionPerSecond();
        showAmountPurchasedProducers();
    }
};
var referencesToProducerInfoArray = function () {
    var producerInformationArray;
    var placeForNameOfProducer = document.getElementById("producerInfo").getElementsByTagName("p")[0];
    var placeForProductionOfProducer = document.getElementById("producerInfo").getElementsByTagName("p")[1];
    var placeForProductionOfAllProducers = document.getElementById("producerInfo").getElementsByTagName("p")[2];
    var placeForAmountOfAllProducers = document.getElementById("producerInfo").getElementsByTagName("p")[3];
    producerInformationArray =
        [
            placeForNameOfProducer,
            placeForProductionOfProducer,
            placeForProductionOfAllProducers,
            placeForAmountOfAllProducers,
        ];
    return producerInformationArray;
};
var getReferencesToParagraph = function () {
    var arrayOfReferencesParagraph;
    var referenceToCursorParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[0].getElementsByTagName("p")[1];
    var referenceToGrandmaParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[1].getElementsByTagName("p")[1];
    var referenceToFarmParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[2].getElementsByTagName("p")[1];
    var referenceToFactoryParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[3].getElementsByTagName("p")[1];
    var referenceToRocketParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[4].getElementsByTagName("p")[1];
    var referenceToPlanetParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[5].getElementsByTagName("p")[1];
    arrayOfReferencesParagraph =
        [
            referenceToCursorParagraph,
            referenceToGrandmaParagraph,
            referenceToFarmParagraph,
            referenceToFactoryParagraph,
            referenceToRocketParagraph,
            referenceToPlanetParagraph
        ];
    return arrayOfReferencesParagraph;
};
var showGlobalProduction = function () {
    document.getElementById("globalProduction").getElementsByTagName("h3")[0].innerHTML = "Cookies: " + globalProduction.CurrentAmountOfCookies.toString();
};
var showGlobalProductionPerSecond = function () {
    globalProduction.GlobalProductionPerSecond = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond);
    document.getElementById("globalProduction").getElementsByTagName("p")[0].innerHTML = "per second: " + globalProduction.GlobalProductionPerSecond.toString();
};
var cursorProductionPerSecond = function () {
    var productionOfAllCursor = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond);
    globalProduction.CurrentAmountOfCookies += productionOfAllCursor;
    showGlobalProduction();
    ifProducerIsAvaibilityToBuy();
};
var productionOfEachProducerPerSecond = function () {
    setInterval(cursorProductionPerSecond, 1000);
};
var showCursorInfo = function () {
    var producerInformationArray = referencesToProducerInfoArray();
    var productionOfAllCursor = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond);
    producerInformationArray[0].innerHTML = cursor.NameOfProducer;
    producerInformationArray[1].innerHTML = "Each " + cursor.NameOfProducer + " produce: " + cursor.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllCursor.toString() + " Cursors produce " + productionOfAllCursor + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + cursor.AmountOfPurchasedProducers.toString();
};
var showAmountPurchasedProducers = function () {
    var arrayOfReferencesParagraph = getReferencesToParagraph();
    arrayOfReferencesParagraph[0].innerHTML = cursor.AmountOfPurchasedProducers.toString();
    arrayOfReferencesParagraph[1].innerHTML = grandma.AmountOfPurchasedProducers.toString();
    arrayOfReferencesParagraph[2].innerHTML = farm.AmountOfPurchasedProducers.toString();
    arrayOfReferencesParagraph[3].innerHTML = factory.AmountOfPurchasedProducers.toString();
    arrayOfReferencesParagraph[4].innerHTML = rocket.AmountOfPurchasedProducers.toString();
    arrayOfReferencesParagraph[5].innerHTML = planet.AmountOfPurchasedProducers.toString();
};
var ifProducerIsAvaibilityToBuy = function () {
    possibilityToBuyProducer();
    impossibilityToBuyProducer();
};
var possibilityToBuyProducer = function () {
    var AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    var singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img");
    var increasdCostOfProducerArray = countCostOfProducer();
    if (AmountOfAllCookies >= (10 + increasdCostOfProducerArray[0])) {
        singleImageProducer[0].style.filter = "brightness(100%)";
        singleImageProducer[0].style.cursor = "pointer";
    }
    else if (AmountOfAllCookies >= (100 + increasdCostOfProducerArray[1])) {
        singleImageProducer[1].style.filter = "brightness(100%)";
        singleImageProducer[1].style.cursor = "pointer";
    }
    else if (AmountOfAllCookies >= (1000 + increasdCostOfProducerArray[2])) {
        singleImageProducer[2].style.filter = "brightness(100%)";
        singleImageProducer[2].style.cursor = "pointer";
    }
    else if (AmountOfAllCookies >= (10000 + increasdCostOfProducerArray[3])) {
        singleImageProducer[3].style.filter = "brightness(100%)";
        singleImageProducer[3].style.cursor = "pointer";
    }
    else if (AmountOfAllCookies >= (100000 + increasdCostOfProducerArray[4])) {
        singleImageProducer[4].style.filter = "brightness(100%)";
        singleImageProducer[4].style.cursor = "pointer";
    }
};
var countCostOfProducer = function () {
    var IncreasdCostOfProducerArray;
    var increaseCostOfCursors = (cursor.AmountOfPurchasedProducers * cursor.CostOfSingleProducer) * 0.33;
    var increaseCostOfGrandma = (grandma.AmountOfPurchasedProducers * grandma.CostOfSingleProducer) * 0.33;
    var increaseCostOfFarm = (farm.AmountOfPurchasedProducers * farm.CostOfSingleProducer) * 0.33;
    var increaseCostOfFactory = (factory.AmountOfPurchasedProducers * factory.CostOfSingleProducer) * 0.33;
    var increaseCostOfRocket = (rocket.AmountOfPurchasedProducers * rocket.CostOfSingleProducer) * 0.33;
    var increaseCostOfPlanet = (planet.AmountOfPurchasedProducers * planet.CostOfSingleProducer) * 0.33;
    IncreasdCostOfProducerArray =
        [
            increaseCostOfCursors,
            increaseCostOfGrandma,
            increaseCostOfFarm,
            increaseCostOfFactory,
            increaseCostOfRocket,
            increaseCostOfPlanet
        ];
    return IncreasdCostOfProducerArray;
};
var impossibilityToBuyProducer = function () {
    var AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    var singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img");
    var increasdCostOfProducerArray = countCostOfProducer();
    if (AmountOfAllCookies < (10 + increasdCostOfProducerArray[0])) {
        singleImageProducer[0].style.filter = "brightness(15%)";
        singleImageProducer[0].style.cursor = "context-menu";
    }
    else if (AmountOfAllCookies < (100 + increasdCostOfProducerArray[1])) {
        singleImageProducer[1].style.filter = "brightness(15%)";
        singleImageProducer[1].style.cursor = "context-menu";
    }
    else if (AmountOfAllCookies < (1000 + increasdCostOfProducerArray[2])) {
        singleImageProducer[2].style.filter = "brightness(15%)";
        singleImageProducer[2].style.cursor = "context-menu";
    }
    else if (AmountOfAllCookies < (10000 + increasdCostOfProducerArray[3])) {
        singleImageProducer[3].style.filter = "brightness(15%)";
        singleImageProducer[3].style.cursor = "context-menu";
    }
    else if (AmountOfAllCookies < (100000 + increasdCostOfProducerArray[4])) {
        singleImageProducer[4].style.filter = "brightness(15%)";
        singleImageProducer[4].style.cursor = "context-menu";
    }
};
