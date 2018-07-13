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
var grandma = new Producer("Grandma", 3, 30);
var farm = new Producer("Cursor", 10, 100);
var factory = new Producer("Factory", 40, 250);
var rocket = new Producer("Rocket", 75, 500);
var planet = new Producer("Planet", 100, 1000);
var globalProduction = new GlobalProductionOfCoockies();
var addCoockieOnClick = function () {
    globalProduction.CurrentAmountOfCookies++;
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
};
var purchaseProducer = function () {
};
var purchaseCursorProducer = function () {
    var costOfCursor = currentCostOfProducer()[0];
    if (globalProduction.CurrentAmountOfCookies >= costOfCursor) {
        cursor.AmountOfPurchasedProducers++;
        globalProduction.CurrentAmountOfCookies -= costOfCursor;
        ifProducerIsAvaibilityToBuy();
        showGlobalProductionPerSecondOnTopPage();
        showAmountPurchasedProducers();
        showCursorInfo();
    }
};
var purchaseGrandmaProducer = function () {
    var costOfGrandma = currentCostOfProducer()[1];
    if (globalProduction.CurrentAmountOfCookies >= costOfGrandma) {
        grandma.AmountOfPurchasedProducers++;
        globalProduction.CurrentAmountOfCookies -= costOfGrandma;
        ifProducerIsAvaibilityToBuy();
        showGlobalProductionPerSecondOnTopPage();
        showAmountPurchasedProducers();
        showGrandmaInfo();
    }
};
var purchaseFarmaProducer = function () {
    var costOfFarm = currentCostOfProducer()[2];
    if (globalProduction.CurrentAmountOfCookies >= costOfFarm) {
        farm.AmountOfPurchasedProducers++;
        globalProduction.CurrentAmountOfCookies -= costOfFarm;
        ifProducerIsAvaibilityToBuy();
        showGlobalProductionPerSecondOnTopPage();
        showAmountPurchasedProducers();
        showFarmInfo();
    }
};
var purchaseFactoryProducer = function () {
    var costOfFactory = currentCostOfProducer()[2];
    if (globalProduction.CurrentAmountOfCookies >= costOfFactory) {
        factory.AmountOfPurchasedProducers++;
        globalProduction.CurrentAmountOfCookies -= costOfFactory;
        ifProducerIsAvaibilityToBuy();
        showGlobalProductionPerSecondOnTopPage();
        showAmountPurchasedProducers();
        showFactoryInfo();
    }
};
var purchaseRocketProducer = function () {
    var costOfRocket = currentCostOfProducer()[2];
    if (globalProduction.CurrentAmountOfCookies >= costOfRocket) {
        rocket.AmountOfPurchasedProducers++;
        globalProduction.CurrentAmountOfCookies -= costOfRocket;
        ifProducerIsAvaibilityToBuy();
        showGlobalProductionPerSecondOnTopPage();
        showAmountPurchasedProducers();
        showRocketInfo();
    }
};
var purchasePlanetProducer = function () {
    var costOfPlanet = currentCostOfProducer()[2];
    if (globalProduction.CurrentAmountOfCookies >= costOfPlanet) {
        planet.AmountOfPurchasedProducers++;
        globalProduction.CurrentAmountOfCookies -= costOfPlanet;
        ifProducerIsAvaibilityToBuy();
        showGlobalProductionPerSecondOnTopPage();
        showAmountPurchasedProducers();
        showPlanetInfo();
    }
};
var getReferencesToProducerInfoArray = function () {
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
var showGlobalProductionOnTopPage = function () {
    document.getElementById("globalProduction").getElementsByTagName("h3")[0].innerHTML = globalProduction.CurrentAmountOfCookies.toString();
};
var globalProductionPerSecondByAllProducers = function () {
    var globalProductionPerSec;
    var cursorsProductionPerSec = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond);
    var grandmasProductionPerSec = (grandma.AmountOfPurchasedProducers * grandma.CoockiesPerSecond);
    var farmsProductionPerSec = (farm.AmountOfPurchasedProducers * farm.CoockiesPerSecond);
    var factoriesProductionPerSec = (factory.AmountOfPurchasedProducers * factory.CoockiesPerSecond);
    var rocketsProductionPerSec = (rocket.AmountOfPurchasedProducers * rocket.CoockiesPerSecond);
    var planetsProductionPerSec = (planet.AmountOfPurchasedProducers * planet.CoockiesPerSecond);
    globalProductionPerSec =
        [
            cursorsProductionPerSec,
            grandmasProductionPerSec,
            farmsProductionPerSec,
            factoriesProductionPerSec,
            rocketsProductionPerSec,
            planetsProductionPerSec
        ];
    return globalProductionPerSec;
};
var sumProductionPerSecondAllProducers = function () {
    var sum = globalProductionPerSecondByAllProducers().reduce(function (a, b) { return a + b; }, 0);
    return sum;
};
var showGlobalProductionPerSecondOnTopPage = function () {
    globalProduction.GlobalProductionPerSecond = sumProductionPerSecondAllProducers();
    document.getElementById("globalProduction").getElementsByTagName("p")[0].innerHTML = "per second: " + globalProduction.GlobalProductionPerSecond.toString();
};
var cursorProductionPerSecond = function () {
    var productioPerSecondnOfAllCursor = globalProductionPerSecondByAllProducers()[0];
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllCursor;
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
};
var grandmaProductionPerSecond = function () {
    var productioPerSecondnOfAllGrandmas = globalProductionPerSecondByAllProducers()[1];
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllGrandmas;
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
};
var farmProductionPerSecond = function () {
    var productioPerSecondnOfAllFarms = globalProductionPerSecondByAllProducers()[2];
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllFarms;
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
};
var factoryProductionPerSecond = function () {
    var productioPerSecondnOfAllFactories = globalProductionPerSecondByAllProducers()[3];
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllFactories;
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
};
var rocketProductionPerSecond = function () {
    var productioPerSecondnOfAllRockets = globalProductionPerSecondByAllProducers()[4];
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllRockets;
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
};
var planetProductionPerSecond = function () {
    var productioPerSecondnOfAllPlanets = globalProductionPerSecondByAllProducers()[5];
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllPlanets;
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
};
var getProductionOfEachProducerPerSecond = function () {
    cursorProductionPerSecond();
    grandmaProductionPerSecond();
    farmProductionPerSecond();
    factoryProductionPerSecond();
    rocketProductionPerSecond();
    planetProductionPerSecond();
};
var refreshToShowNewProduction = function () {
    setInterval(getProductionOfEachProducerPerSecond, 1000);
};
var getCurrentProductionPerSecondOfProducer = function () {
    var producersProductionPerSecond;
    var productionPerSecondOfAllCursors = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond);
    var productionPerSecondOfAllGrandmas = (grandma.AmountOfPurchasedProducers * grandma.CoockiesPerSecond);
    var productionPerSecondOfAllFarms = (farm.AmountOfPurchasedProducers * farm.CoockiesPerSecond);
    var productionPerSecondOfAllFactories = (factory.AmountOfPurchasedProducers * factory.CoockiesPerSecond);
    var productionPerSecondOfAllRockets = (rocket.AmountOfPurchasedProducers * rocket.CoockiesPerSecond);
    var productionPerSecondOfAllPlanets = (planet.AmountOfPurchasedProducers * planet.CoockiesPerSecond);
    producersProductionPerSecond =
        [
            productionPerSecondOfAllCursors,
            productionPerSecondOfAllGrandmas,
            productionPerSecondOfAllFarms,
            productionPerSecondOfAllFactories,
            productionPerSecondOfAllRockets,
            productionPerSecondOfAllPlanets
        ];
    return producersProductionPerSecond;
};
var showCursorInfo = function () {
    var producerInformationArray = getReferencesToProducerInfoArray();
    var productionOfAllCursor = getCurrentProductionPerSecondOfProducer()[0];
    var currentProducerCost = currentCostOfProducer()[0];
    producerInformationArray[0].innerHTML = "Current cost of " + cursor.NameOfProducer + ": " + currentProducerCost;
    producerInformationArray[1].innerHTML = "Each " + cursor.NameOfProducer + " produce: " + cursor.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllCursor.toString() + " Cursors produce " + productionOfAllCursor + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + cursor.AmountOfPurchasedProducers.toString();
};
var showGrandmaInfo = function () {
    var producerInformationArray = getReferencesToProducerInfoArray();
    var productionOfAllGrandmas = getCurrentProductionPerSecondOfProducer()[1];
    var currentProducerCost = currentCostOfProducer()[1];
    producerInformationArray[0].innerHTML = "Current cost of " + grandma.NameOfProducer + ": " + currentProducerCost;
    producerInformationArray[1].innerHTML = "Each " + grandma.NameOfProducer + " produce: " + grandma.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllGrandmas.toString() + " Grandmas produce " + productionOfAllGrandmas + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + grandma.AmountOfPurchasedProducers.toString();
};
var showFarmInfo = function () {
    var producerInformationArray = getReferencesToProducerInfoArray();
    var productionOfAllFarms = getCurrentProductionPerSecondOfProducer()[2];
    var currentProducerCost = currentCostOfProducer()[2];
    producerInformationArray[0].innerHTML = "Current cost of " + farm.NameOfProducer + ": " + currentProducerCost;
    producerInformationArray[1].innerHTML = "Each " + farm.NameOfProducer + " produce: " + farm.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllFarms.toString() + " Farmss produce " + productionOfAllFarms + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + farm.AmountOfPurchasedProducers.toString();
};
var showFactoryInfo = function () {
    var producerInformationArray = getReferencesToProducerInfoArray();
    var productionOfAllFactories = getCurrentProductionPerSecondOfProducer()[3];
    var currentProducerCost = currentCostOfProducer()[3];
    producerInformationArray[0].innerHTML = "Current cost of " + factory.NameOfProducer + ": " + currentProducerCost;
    producerInformationArray[1].innerHTML = "Each " + factory.NameOfProducer + " produce: " + factory.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllFactories.toString() + " Factories produce " + productionOfAllFactories + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + factory.AmountOfPurchasedProducers.toString();
};
var showRocketInfo = function () {
    var producerInformationArray = getReferencesToProducerInfoArray();
    var productionOfAllRockets = getCurrentProductionPerSecondOfProducer()[4];
    var currentProducerCost = currentCostOfProducer()[4];
    producerInformationArray[0].innerHTML = "Current cost of " + rocket.NameOfProducer + ": " + currentProducerCost;
    producerInformationArray[1].innerHTML = "Each " + rocket.NameOfProducer + " produce: " + rocket.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllRockets.toString() + " Rockets produce " + productionOfAllRockets + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + rocket.AmountOfPurchasedProducers.toString();
};
var showPlanetInfo = function () {
    var producerInformationArray = getReferencesToProducerInfoArray();
    var productionOfAllPlanets = getCurrentProductionPerSecondOfProducer()[5];
    var currentProducerCost = currentCostOfProducer()[5];
    producerInformationArray[0].innerHTML = "Current cost of " + planet.NameOfProducer + ": " + currentProducerCost;
    producerInformationArray[1].innerHTML = "Each " + planet.NameOfProducer + " produce: " + planet.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllPlanets.toString() + " Planets produce " + productionOfAllPlanets + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + planet.AmountOfPurchasedProducers.toString();
};
var cleanProducerInfoOnBottomPage = function () {
    var producerInformationArray = getReferencesToProducerInfoArray();
    producerInformationArray[0].innerHTML = "";
    producerInformationArray[1].innerHTML = "";
    producerInformationArray[2].innerHTML = "";
    producerInformationArray[3].innerHTML = "";
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
var currentCostOfProducer = function () {
    var IncreasdCostOfProducerArray;
    var increaseCostOfCursors = cursor.CostOfSingleProducer + (cursor.AmountOfPurchasedProducers * cursor.CostOfSingleProducer) * 0.33;
    var increaseCostOfGrandma = grandma.CostOfSingleProducer + (grandma.AmountOfPurchasedProducers * grandma.CostOfSingleProducer) * 0.33;
    var increaseCostOfFarm = farm.CostOfSingleProducer + (farm.AmountOfPurchasedProducers * farm.CostOfSingleProducer) * 0.33;
    var increaseCostOfFactory = factory.CostOfSingleProducer + (factory.AmountOfPurchasedProducers * factory.CostOfSingleProducer) * 0.33;
    var increaseCostOfRocket = rocket.CostOfSingleProducer + (rocket.AmountOfPurchasedProducers * rocket.CostOfSingleProducer) * 0.33;
    var increaseCostOfPlanet = planet.CostOfSingleProducer + (planet.AmountOfPurchasedProducers * planet.CostOfSingleProducer) * 0.33;
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
var ifProducerIsAvaibilityToBuy = function () {
    possibilityToBuyProducer();
    impossibilityToBuyProducer();
};
var possibilityToBuyProducer = function () {
    var AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    var singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img");
    var costOfProducerArray = currentCostOfProducer();
    for (var i = 0; i < costOfProducerArray.length; i++) {
        if (AmountOfAllCookies >= costOfProducerArray[i]) {
            singleImageProducer[i].style.filter = "brightness(100%)";
            singleImageProducer[i].style.cursor = "pointer";
        }
    }
};
var impossibilityToBuyProducer = function () {
    var AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    var singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img");
    var costOfProducerArray = currentCostOfProducer();
    for (var i = 0; i < costOfProducerArray.length; i++) {
        if (AmountOfAllCookies < costOfProducerArray[i]) {
            singleImageProducer[i].style.filter = "brightness(15%)";
            singleImageProducer[i].style.cursor = "context-menu";
        }
    }
};
