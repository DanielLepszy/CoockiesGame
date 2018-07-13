export { }
abstract class ProductionOfCoockiesByProducer {
    CoockiesPerSecond: number;
    CostOfSingleProducer: number;
}
class Producer extends ProductionOfCoockiesByProducer {
    public NameOfProducer: string;
    public AmountOfPurchasedProducers: number = 0;
    public WholeProductionOfCoockiesByAllProducer: number;


    constructor(NameOfProducer: string, CoockiesPerSecond: number, CostOfProducer: number) {
        super();
        this.NameOfProducer = NameOfProducer;
        this.CoockiesPerSecond = CoockiesPerSecond;
        this.CostOfSingleProducer = CostOfProducer;

        console.log("Name: " + NameOfProducer);
    }
    wholeProduction(CoockiesPerSecond: number, AmountOfPurchasedProducers: number): number {
        this.WholeProductionOfCoockiesByAllProducer = CoockiesPerSecond * CoockiesPerSecond
        return this.WholeProductionOfCoockiesByAllProducer;
    }

}
class GlobalProductionOfCoockies {
    public CurrentAmountOfCookies: number = 0
    public GlobalProductionPerSecond: number = 0
}

let cursor = new Producer("Cursor", 1, 10)
let grandma = new Producer("Grandma", 3, 30)
let farm = new Producer("Cursor", 10, 100)
let factory = new Producer("Factory", 40, 250)
let rocket = new Producer("Rocket", 75, 500)
let planet = new Producer("Planet", 100, 1000)

let globalProduction = new GlobalProductionOfCoockies()


const addCoockieOnClick = (): void => {
    globalProduction.CurrentAmountOfCookies++;
    showGlobalProductionOnTopPage()
    ifProducerIsAvaibilityToBuy()
}
const purchaseProducer = (): void => {

}
const purchaseCursorProducer = (): void => {

    let costOfCursor = currentCostOfProducer()[0];

    if (globalProduction.CurrentAmountOfCookies >= costOfCursor) {
        cursor.AmountOfPurchasedProducers++
        globalProduction.CurrentAmountOfCookies -= costOfCursor
        ifProducerIsAvaibilityToBuy()
        showGlobalProductionPerSecondOnTopPage()
        showAmountPurchasedProducers()
        showCursorInfo()
    }
}

const purchaseGrandmaProducer = (): void => {

    let costOfGrandma = currentCostOfProducer()[1];

    if (globalProduction.CurrentAmountOfCookies >= costOfGrandma) {
        grandma.AmountOfPurchasedProducers++
        globalProduction.CurrentAmountOfCookies -= costOfGrandma
        ifProducerIsAvaibilityToBuy()
        showGlobalProductionPerSecondOnTopPage()
        showAmountPurchasedProducers()
        showGrandmaInfo()
    }
}
const purchaseFarmaProducer = (): void => {

    let costOfFarm = currentCostOfProducer()[2];

    if (globalProduction.CurrentAmountOfCookies >= costOfFarm) {
        farm.AmountOfPurchasedProducers++
        globalProduction.CurrentAmountOfCookies -= costOfFarm
        ifProducerIsAvaibilityToBuy()
        showGlobalProductionPerSecondOnTopPage()
        showAmountPurchasedProducers()
        showFarmInfo()
    }
}
const purchaseFactoryProducer = (): void => {

    let costOfFactory = currentCostOfProducer()[2];

    if (globalProduction.CurrentAmountOfCookies >= costOfFactory) {
        factory.AmountOfPurchasedProducers++
        globalProduction.CurrentAmountOfCookies -= costOfFactory
        ifProducerIsAvaibilityToBuy()
        showGlobalProductionPerSecondOnTopPage()
        showAmountPurchasedProducers()
        showFactoryInfo()
    }
}

const purchaseRocketProducer = (): void => {

    let costOfRocket = currentCostOfProducer()[2];

    if (globalProduction.CurrentAmountOfCookies >= costOfRocket) {
        rocket.AmountOfPurchasedProducers++
        globalProduction.CurrentAmountOfCookies -= costOfRocket
        ifProducerIsAvaibilityToBuy()
        showGlobalProductionPerSecondOnTopPage()
        showAmountPurchasedProducers()
        showRocketInfo()
    }
}
const purchasePlanetProducer = (): void => {

    let costOfPlanet = currentCostOfProducer()[2];

    if (globalProduction.CurrentAmountOfCookies >= costOfPlanet) {
        planet.AmountOfPurchasedProducers++
        globalProduction.CurrentAmountOfCookies -= costOfPlanet
        ifProducerIsAvaibilityToBuy()
        showGlobalProductionPerSecondOnTopPage()
        showAmountPurchasedProducers()
        showPlanetInfo()
    }
}
const getReferencesToProducerInfoArray = (): Array<any> => {

    let producerInformationArray: Array<any>;

    let placeForNameOfProducer = document.getElementById("producerInfo").getElementsByTagName("p")[0]
    let placeForProductionOfProducer = document.getElementById("producerInfo").getElementsByTagName("p")[1]
    let placeForProductionOfAllProducers = document.getElementById("producerInfo").getElementsByTagName("p")[2]
    let placeForAmountOfAllProducers = document.getElementById("producerInfo").getElementsByTagName("p")[3]

    producerInformationArray =
        [
            placeForNameOfProducer,
            placeForProductionOfProducer,
            placeForProductionOfAllProducers,
            placeForAmountOfAllProducers,
        ]
    return producerInformationArray
}
const getReferencesToParagraph = (): Array<any> => {
    let arrayOfReferencesParagraph: Array<any>;

    let referenceToCursorParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[0].getElementsByTagName("p")[1]
    let referenceToGrandmaParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[1].getElementsByTagName("p")[1]
    let referenceToFarmParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[2].getElementsByTagName("p")[1]
    let referenceToFactoryParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[3].getElementsByTagName("p")[1]
    let referenceToRocketParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[4].getElementsByTagName("p")[1]
    let referenceToPlanetParagraph = document.getElementById("producersOfCookies").getElementsByTagName("div")[5].getElementsByTagName("p")[1]

    arrayOfReferencesParagraph =
        [
            referenceToCursorParagraph,
            referenceToGrandmaParagraph,
            referenceToFarmParagraph,
            referenceToFactoryParagraph,
            referenceToRocketParagraph,
            referenceToPlanetParagraph
        ]
    return arrayOfReferencesParagraph
}
const showGlobalProductionOnTopPage = (): void => {
    document.getElementById("globalProduction").getElementsByTagName("h3")[0].innerHTML = globalProduction.CurrentAmountOfCookies.toString()
}
const globalProductionPerSecondByAllProducers = (): Array<number> => {

    let globalProductionPerSec: Array<number>

    let cursorsProductionPerSec = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond)
    let grandmasProductionPerSec = (grandma.AmountOfPurchasedProducers * grandma.CoockiesPerSecond)
    let farmsProductionPerSec = (farm.AmountOfPurchasedProducers * farm.CoockiesPerSecond)
    let factoriesProductionPerSec = (factory.AmountOfPurchasedProducers * factory.CoockiesPerSecond)
    let rocketsProductionPerSec = (rocket.AmountOfPurchasedProducers * rocket.CoockiesPerSecond)
    let planetsProductionPerSec = (planet.AmountOfPurchasedProducers * planet.CoockiesPerSecond)

    globalProductionPerSec =
        [
            cursorsProductionPerSec,
            grandmasProductionPerSec,
            farmsProductionPerSec,
            factoriesProductionPerSec,
            rocketsProductionPerSec,
            planetsProductionPerSec
        ]
    return globalProductionPerSec
}
const sumProductionPerSecondAllProducers = (): number => {
    let sum = globalProductionPerSecondByAllProducers().reduce((a, b) => a + b, 0)
    return sum
}
const showGlobalProductionPerSecondOnTopPage = (): void => {

    globalProduction.GlobalProductionPerSecond = sumProductionPerSecondAllProducers()
    document.getElementById("globalProduction").getElementsByTagName("p")[0].innerHTML = "per second: " + globalProduction.GlobalProductionPerSecond.toString()
}
const cursorProductionPerSecond = (): void => {
    let productioPerSecondnOfAllCursor = globalProductionPerSecondByAllProducers()[0]
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllCursor
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
}
const grandmaProductionPerSecond = (): void => {
    let productioPerSecondnOfAllGrandmas = globalProductionPerSecondByAllProducers()[1]
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllGrandmas
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
}
const farmProductionPerSecond = (): void => {
    let productioPerSecondnOfAllFarms = globalProductionPerSecondByAllProducers()[2]
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllFarms
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
}
const factoryProductionPerSecond = (): void => {
    let productioPerSecondnOfAllFactories = globalProductionPerSecondByAllProducers()[3]
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllFactories
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
}
const rocketProductionPerSecond = (): void => {
    let productioPerSecondnOfAllRockets = globalProductionPerSecondByAllProducers()[4]
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllRockets
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
}
const planetProductionPerSecond = (): void => {
    let productioPerSecondnOfAllPlanets = globalProductionPerSecondByAllProducers()[5]
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllPlanets
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
}
const getProductionOfEachProducerPerSecond = (): void => {
    cursorProductionPerSecond()
    grandmaProductionPerSecond()
    farmProductionPerSecond()
    factoryProductionPerSecond()
    rocketProductionPerSecond()
    planetProductionPerSecond()
}

const refreshToShowNewProduction = (): void => {
    
    setInterval(getProductionOfEachProducerPerSecond, 1000);
}
const getCurrentProductionPerSecondOfProducer = (): Array<number> => {
    let producersProductionPerSecond: Array<number>

    let productionPerSecondOfAllCursors = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond)
    let productionPerSecondOfAllGrandmas = (grandma.AmountOfPurchasedProducers * grandma.CoockiesPerSecond)
    let productionPerSecondOfAllFarms = (farm.AmountOfPurchasedProducers * farm.CoockiesPerSecond)
    let productionPerSecondOfAllFactories = (factory.AmountOfPurchasedProducers * factory.CoockiesPerSecond)
    let productionPerSecondOfAllRockets = (rocket.AmountOfPurchasedProducers * rocket.CoockiesPerSecond)
    let productionPerSecondOfAllPlanets = (planet.AmountOfPurchasedProducers * planet.CoockiesPerSecond)

    producersProductionPerSecond =
        [
            productionPerSecondOfAllCursors,
            productionPerSecondOfAllGrandmas,
            productionPerSecondOfAllFarms,
            productionPerSecondOfAllFactories,
            productionPerSecondOfAllRockets,
            productionPerSecondOfAllPlanets
        ]

    return producersProductionPerSecond
}
const showCursorInfo = (): void => {
    let producerInformationArray = getReferencesToProducerInfoArray();
    let productionOfAllCursor = getCurrentProductionPerSecondOfProducer()[0]
    let currentProducerCost = currentCostOfProducer()[0]

    producerInformationArray[0].innerHTML = "Current cost of " + cursor.NameOfProducer + ": " + currentProducerCost
    producerInformationArray[1].innerHTML = "Each " + cursor.NameOfProducer + " produce: " + cursor.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllCursor.toString() + " Cursors produce " + productionOfAllCursor + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + cursor.AmountOfPurchasedProducers.toString()

}
const showGrandmaInfo = (): void => {
    let producerInformationArray = getReferencesToProducerInfoArray();
    let productionOfAllGrandmas = getCurrentProductionPerSecondOfProducer()[1]
    let currentProducerCost = currentCostOfProducer()[1]

    producerInformationArray[0].innerHTML = "Current cost of " + grandma.NameOfProducer + ": " + currentProducerCost
    producerInformationArray[1].innerHTML = "Each " + grandma.NameOfProducer + " produce: " + grandma.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllGrandmas.toString() + " Grandmas produce " + productionOfAllGrandmas + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + grandma.AmountOfPurchasedProducers.toString()

}
const showFarmInfo = (): void => {
    let producerInformationArray = getReferencesToProducerInfoArray();
    let productionOfAllFarms = getCurrentProductionPerSecondOfProducer()[2]
    let currentProducerCost = currentCostOfProducer()[2]

    producerInformationArray[0].innerHTML = "Current cost of " + farm.NameOfProducer + ": " + currentProducerCost
    producerInformationArray[1].innerHTML = "Each " + farm.NameOfProducer + " produce: " + farm.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllFarms.toString() + " Farmss produce " + productionOfAllFarms + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + farm.AmountOfPurchasedProducers.toString()

}
const showFactoryInfo = (): void => {
    let producerInformationArray = getReferencesToProducerInfoArray();
    let productionOfAllFactories = getCurrentProductionPerSecondOfProducer()[3]
    let currentProducerCost = currentCostOfProducer()[3]

    producerInformationArray[0].innerHTML = "Current cost of " + factory.NameOfProducer + ": " + currentProducerCost
    producerInformationArray[1].innerHTML = "Each " + factory.NameOfProducer + " produce: " + factory.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllFactories.toString() + " Factories produce " + productionOfAllFactories + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + factory.AmountOfPurchasedProducers.toString()
}
const showRocketInfo = (): void => {
    let producerInformationArray = getReferencesToProducerInfoArray();
    let productionOfAllRockets = getCurrentProductionPerSecondOfProducer()[4]
    let currentProducerCost = currentCostOfProducer()[4]

    producerInformationArray[0].innerHTML = "Current cost of " + rocket.NameOfProducer + ": " + currentProducerCost
    producerInformationArray[1].innerHTML = "Each " + rocket.NameOfProducer + " produce: " + rocket.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllRockets.toString() + " Rockets produce " + productionOfAllRockets + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + rocket.AmountOfPurchasedProducers.toString()
}
const showPlanetInfo = (): void => {
    let producerInformationArray = getReferencesToProducerInfoArray();
    let productionOfAllPlanets = getCurrentProductionPerSecondOfProducer()[5]
    let currentProducerCost = currentCostOfProducer()[5]

    producerInformationArray[0].innerHTML = "Current cost of " + planet.NameOfProducer + ": " + currentProducerCost
    producerInformationArray[1].innerHTML = "Each " + planet.NameOfProducer + " produce: " + planet.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllPlanets.toString() + " Planets produce " + productionOfAllPlanets + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + planet.AmountOfPurchasedProducers.toString()
}
const cleanProducerInfoOnBottomPage = ():void =>
{
    let producerInformationArray = getReferencesToProducerInfoArray();
    producerInformationArray[0].innerHTML = ""
    producerInformationArray[1].innerHTML = ""
    producerInformationArray[2].innerHTML = ""
    producerInformationArray[3].innerHTML = ""
}
const showAmountPurchasedProducers = (): void => {
    let arrayOfReferencesParagraph = getReferencesToParagraph();

    arrayOfReferencesParagraph[0].innerHTML = cursor.AmountOfPurchasedProducers.toString()
    arrayOfReferencesParagraph[1].innerHTML = grandma.AmountOfPurchasedProducers.toString()
    arrayOfReferencesParagraph[2].innerHTML = farm.AmountOfPurchasedProducers.toString()
    arrayOfReferencesParagraph[3].innerHTML = factory.AmountOfPurchasedProducers.toString()
    arrayOfReferencesParagraph[4].innerHTML = rocket.AmountOfPurchasedProducers.toString()
    arrayOfReferencesParagraph[5].innerHTML = planet.AmountOfPurchasedProducers.toString()

}
const currentCostOfProducer = (): Array<number> => {
    let IncreasdCostOfProducerArray: Array<number>;
    let increaseCostOfCursors = cursor.CostOfSingleProducer + (cursor.AmountOfPurchasedProducers * cursor.CostOfSingleProducer) * 0.33
    let increaseCostOfGrandma = grandma.CostOfSingleProducer + (grandma.AmountOfPurchasedProducers * grandma.CostOfSingleProducer) * 0.33
    let increaseCostOfFarm = farm.CostOfSingleProducer + (farm.AmountOfPurchasedProducers * farm.CostOfSingleProducer) * 0.33
    let increaseCostOfFactory = factory.CostOfSingleProducer + (factory.AmountOfPurchasedProducers * factory.CostOfSingleProducer) * 0.33
    let increaseCostOfRocket = rocket.CostOfSingleProducer + (rocket.AmountOfPurchasedProducers * rocket.CostOfSingleProducer) * 0.33
    let increaseCostOfPlanet = planet.CostOfSingleProducer + (planet.AmountOfPurchasedProducers * planet.CostOfSingleProducer) * 0.33

    IncreasdCostOfProducerArray =
        [
            increaseCostOfCursors,
            increaseCostOfGrandma,
            increaseCostOfFarm,
            increaseCostOfFactory,
            increaseCostOfRocket,
            increaseCostOfPlanet
        ]

    return IncreasdCostOfProducerArray
}
const ifProducerIsAvaibilityToBuy = (): void => {
    possibilityToBuyProducer();
    impossibilityToBuyProducer();
}
const possibilityToBuyProducer = (): void => {
    let AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    let singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img")
    let costOfProducerArray = currentCostOfProducer();

    for (var i: number = 0; i < costOfProducerArray.length; i++) {
        if (AmountOfAllCookies >= costOfProducerArray[i]) {
            singleImageProducer[i].style.filter = "brightness(100%)"
            singleImageProducer[i].style.cursor = "pointer"
        }
    }
}
const impossibilityToBuyProducer = () => {
    let AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    let singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img")
    let costOfProducerArray = currentCostOfProducer();
    for (var i: number = 0; i < costOfProducerArray.length; i++) {
        if (AmountOfAllCookies < costOfProducerArray[i]) {
            singleImageProducer[i].style.filter = "brightness(15%)"
            singleImageProducer[i].style.cursor = "context-menu"
        }
    }
}


