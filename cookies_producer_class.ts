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
    showGlobalProduction();
    ifProducerIsAvaibilityToBuy();
}

const purchaseCursorProducer = (): void => {
   
    let increaseCostOfCursors =  (cursor.AmountOfPurchasedProducers* cursor.CostOfSingleProducer)*0.33
   
    if (globalProduction.CurrentAmountOfCookies >= (10+increaseCostOfCursors)) {
        cursor.AmountOfPurchasedProducers++
        globalProduction.CurrentAmountOfCookies -= 10;
        ifProducerIsAvaibilityToBuy();
        showGlobalProductionPerSecond();
        showAmountPurchasedProducers();
    }
}

const referencesToProducerInfoArray = (): Array<any> => {
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
const showGlobalProduction = (): void => {
    document.getElementById("globalProduction").getElementsByTagName("h3")[0].innerHTML = "Cookies: " + globalProduction.CurrentAmountOfCookies.toString()
}
const showGlobalProductionPerSecond = (): void => {
    globalProduction.GlobalProductionPerSecond = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond)
    document.getElementById("globalProduction").getElementsByTagName("p")[0].innerHTML = "per second: " + globalProduction.GlobalProductionPerSecond.toString()
}
const cursorProductionPerSecond = (): void => {
    let productionOfAllCursor = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond)
    globalProduction.CurrentAmountOfCookies += productionOfAllCursor
    showGlobalProduction();
    ifProducerIsAvaibilityToBuy();
}


const productionOfEachProducerPerSecond = () => {
    setInterval(cursorProductionPerSecond, 1000);
}


const showCursorInfo = (): void => {
    let producerInformationArray = referencesToProducerInfoArray();
    let productionOfAllCursor = (cursor.AmountOfPurchasedProducers * cursor.CoockiesPerSecond)

    producerInformationArray[0].innerHTML = cursor.NameOfProducer
    producerInformationArray[1].innerHTML = "Each " + cursor.NameOfProducer + " produce: " + cursor.CoockiesPerSecond.toString() + " cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllCursor.toString() + " Cursors produce " + productionOfAllCursor + " cookies per second";
    producerInformationArray[3].innerHTML = "Amount producer: " + cursor.AmountOfPurchasedProducers.toString()

}
const showAmountPurchasedProducers = () => {
    let arrayOfReferencesParagraph = getReferencesToParagraph();

    arrayOfReferencesParagraph[0].innerHTML = cursor.AmountOfPurchasedProducers.toString()
    arrayOfReferencesParagraph[1].innerHTML = grandma.AmountOfPurchasedProducers.toString()
    arrayOfReferencesParagraph[2].innerHTML = farm.AmountOfPurchasedProducers.toString()
    arrayOfReferencesParagraph[3].innerHTML = factory.AmountOfPurchasedProducers.toString()
    arrayOfReferencesParagraph[4].innerHTML = rocket.AmountOfPurchasedProducers.toString()
    arrayOfReferencesParagraph[5].innerHTML = planet.AmountOfPurchasedProducers.toString()

}
const ifProducerIsAvaibilityToBuy = (): void => {
    possibilityToBuyProducer();
    impossibilityToBuyProducer();
}

const possibilityToBuyProducer = (): void => {
    let AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    let singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img")
    let increasdCostOfProducerArray = countCostOfProducer();
    
    if (AmountOfAllCookies >= (10+increasdCostOfProducerArray[0])) {
        singleImageProducer[0].style.filter = "brightness(100%)"
        singleImageProducer[0].style.cursor = "pointer"
    }
    else if (AmountOfAllCookies >= (100+increasdCostOfProducerArray[1])) {
        singleImageProducer[1].style.filter = "brightness(100%)"
        singleImageProducer[1].style.cursor = "pointer"
    }
    else if (AmountOfAllCookies >= (1000+increasdCostOfProducerArray[2])) {
        singleImageProducer[2].style.filter = "brightness(100%)"
        singleImageProducer[2].style.cursor = "pointer"
    }
    else if (AmountOfAllCookies >= (10000+increasdCostOfProducerArray[3])) {
        singleImageProducer[3].style.filter = "brightness(100%)"
        singleImageProducer[3].style.cursor = "pointer"
    }
    else if (AmountOfAllCookies >= (100000+increasdCostOfProducerArray[4])) {
        singleImageProducer[4].style.filter = "brightness(100%)"
        singleImageProducer[4].style.cursor = "pointer"
    }

}
const countCostOfProducer = ():Array<number> =>
{
    let IncreasdCostOfProducerArray: Array<number>;
    let increaseCostOfCursors =  (cursor.AmountOfPurchasedProducers* cursor.CostOfSingleProducer)*0.33
    let increaseCostOfGrandma =  (grandma.AmountOfPurchasedProducers* grandma.CostOfSingleProducer)*0.33
    let increaseCostOfFarm =  (farm.AmountOfPurchasedProducers* farm.CostOfSingleProducer)*0.33
    let increaseCostOfFactory =  (factory.AmountOfPurchasedProducers* factory.CostOfSingleProducer)*0.33
    let increaseCostOfRocket =  (rocket.AmountOfPurchasedProducers* rocket.CostOfSingleProducer)*0.33
    let increaseCostOfPlanet =  (planet.AmountOfPurchasedProducers* planet.CostOfSingleProducer)*0.33
    
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
const impossibilityToBuyProducer = () => {
    let AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    let singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img")
    let increasdCostOfProducerArray = countCostOfProducer();
    if (AmountOfAllCookies < (10+increasdCostOfProducerArray[0])) {
        singleImageProducer[0].style.filter = "brightness(15%)"
        singleImageProducer[0].style.cursor = "context-menu"
    }
    else if (AmountOfAllCookies < (100+increasdCostOfProducerArray[1])) {
        singleImageProducer[1].style.filter = "brightness(15%)"
        singleImageProducer[1].style.cursor = "context-menu"
    }
    else if (AmountOfAllCookies < (1000+increasdCostOfProducerArray[2])) {
        singleImageProducer[2].style.filter = "brightness(15%)"
        singleImageProducer[2].style.cursor = "context-menu"
    }
    else if (AmountOfAllCookies < (10000+increasdCostOfProducerArray[3])) {
        singleImageProducer[3].style.filter = "brightness(15%)"
        singleImageProducer[3].style.cursor = "context-menu"
    }
    else if (AmountOfAllCookies < (100000+increasdCostOfProducerArray[4])) {
        singleImageProducer[4].style.filter = "brightness(15%)"
        singleImageProducer[4].style.cursor = "context-menu"
    }

}


