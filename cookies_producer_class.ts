export { }
abstract class ProductionOfCoockiesByProducer {
    CoockiesPerSecond: number;
    CostOfSingleProducer: number;
}
class Producer extends ProductionOfCoockiesByProducer {
    public NameOfProducer: string;
    public AmountOfPurchasedProducers = 0;
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
let grandma = new Producer("Grandma", 3, 300)
let farm = new Producer("Cursor", 10, 1000)
let factory = new Producer("Factory", 40, 2000)
let rocket = new Producer("Rocket", 75, 4000)
let planet = new Producer("Planet", 100, 6000)

let globalProduction = new GlobalProductionOfCoockies();

const addCoockieOnClick = (): void => {
    globalProduction.CurrentAmountOfCookies++;
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
}

const purchaseCursorProducer = (): void => {

    let costOfCursor = currentCostOfProducer()[0];
    
    if (globalProduction.CurrentAmountOfCookies >= costOfCursor) {
        cursor.AmountOfPurchasedProducers++
        globalProduction.CurrentAmountOfCookies -= costOfCursor;
        ifProducerIsAvaibilityToBuy();
        showGlobalProductionPerSecondOnTopPage();
        showAmountPurchasedProducers();
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
    document.getElementById("globalProduction").getElementsByTagName("h3")[0].innerHTML = "Cookies: " + globalProduction.CurrentAmountOfCookies.toString()
}
const showGlobalProductionPerSecondOnTopPage = (): void => {
    globalProduction.GlobalProductionPerSecond = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond)
    document.getElementById("globalProduction").getElementsByTagName("p")[0].innerHTML = "per second: " + globalProduction.GlobalProductionPerSecond.toString()
}
const cursorProductionPerSecond = (): void => {
    let productioPerSecondnOfAllCursor = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond)
    globalProduction.CurrentAmountOfCookies += productioPerSecondnOfAllCursor
    showGlobalProductionOnTopPage();
    ifProducerIsAvaibilityToBuy();
}


const productionOfEachProducerPerSecond = (): void => {
    setInterval(cursorProductionPerSecond, 1000);
}
const getCurrentProductionPerSecondOfProducer = ():Array<number> =>
{
    let producersProductionPerSecond:Array<number>

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

    for(var i:number=0;i<costOfProducerArray.length;i++)
    {
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
    for(var i:number=0;i<costOfProducerArray.length;i++)
    {
        if (AmountOfAllCookies < costOfProducerArray[i]) {
            singleImageProducer[i].style.filter = "brightness(15%)"
            singleImageProducer[i].style.cursor = "context-menu"
        }
    }
}


