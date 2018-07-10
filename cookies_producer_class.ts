abstract class ProductionOfCoockiesByProducer {
     CoockiesPerSecond: number;
     CostOfSingleProducer: number;
}
class Producer extends ProductionOfCoockiesByProducer {
    private NameOfProducer: string;
    public AmountOfPurchasedProducers=0;
    public WholeProductionOfCoockiesByAllProducer:number;

    
    constructor(NameOfProducer: string, CoockiesPerSecond: number, CostOfProducer: number) {
        super();
        this.NameOfProducer = NameOfProducer;
        this.CoockiesPerSecond = CoockiesPerSecond;
        this.CostOfSingleProducer = CostOfProducer;

        console.log("Name: "+ NameOfProducer);
    }
     wholeProduction(CoockiesPerSecond: number,AmountOfPurchasedProducers:number):number
    {
        this.WholeProductionOfCoockiesByAllProducer = CoockiesPerSecond*CoockiesPerSecond
        return  this.WholeProductionOfCoockiesByAllProducer;
    }

}
class GlobalProductionOfCoockies
{
    public CurrentAmountOfCookies=0;
    public GlobalProductionPerSecond:number;
}

let cursor = new Producer("Cursor",1,10)
let grandma = new Producer("Grandma",3,300)
let farm = new Producer("Cursor",10,1000)


let NameOfProducer = document.getElementById("producerInfo").getElementsByTagName("p")[0]

let placeForAllCockies = document.getElementById("globalProduction").getElementsByTagName("p")[0]
let placeForGlobalProductionPerSecond = document.getElementById("globalProduction").getElementsByTagName("p")[3]

let globalProduction = new GlobalProductionOfCoockies();

const addCoockieOnClick = () =>
{
    globalProduction.CurrentAmountOfCookies = parseFloat(placeForAllCockies.textContent);
    globalProduction.CurrentAmountOfCookies++;
    placeForAllCockies.innerHTML=globalProduction.CurrentAmountOfCookies.toString();
    ifProducerIsAvaibilityToBuy();
}

const purchaseCursorProducer = () =>
{
    if(globalProduction.CurrentAmountOfCookies>=10)
    {
        let placeForAmountOfCursor = document.getElementById("producersOfCookies").getElementsByTagName("div")[0].getElementsByTagName("p")[1]
        
        cursor.AmountOfPurchasedProducers++
        placeForAmountOfCursor.innerHTML = cursor.AmountOfPurchasedProducers.toString()
        globalProduction.CurrentAmountOfCookies-=10;
        placeForAllCockies.innerHTML=globalProduction.CurrentAmountOfCookies.toString();
        ifProducerIsAvaibilityToBuy();
    }
}
const cursorProductionPerSecond = (place) =>
{
    globalProduction.CurrentAmountOfCookies += (cursor.AmountOfPurchasedProducers*cursor.CoockiesPerSecond)
    place.textContent +=globalProduction.CurrentAmountOfCookies.toString();
}
const productionOfEachProducerPerSecond = () =>
{
    let placeForCursorProductionPerSecond = document.getElementById("producerInfo").getElementsByTagName("p")[3]
    setInterval(
        cursorProductionPerSecond(placeForCursorProductionPerSecond), 1000);
}

const ifProducerIsAvaibilityToBuy = () =>
{
    possibilityToBuyProducer();
    impossibilityToBuyProducer();
}

const possibilityToBuyProducer = () =>
{
    let AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    let singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img")
    if(AmountOfAllCookies>=10)
    {
        singleImageProducer[0].style.filter ="brightness(100%)"
        singleImageProducer[0].style.cursor="pointer"
    }
    else if(AmountOfAllCookies>=100)
    {
        singleImageProducer[1].style.filter ="brightness(100%)"
        singleImageProducer[0].style.cursor="pointer"
    }
    else if(AmountOfAllCookies>=1000)
    {
        singleImageProducer[2].style.filter ="brightness(100%)"
        singleImageProducer[0].style.cursor="pointer"
    }
    else if(AmountOfAllCookies>=10000)
    {
        singleImageProducer[3].style.filter ="brightness(100%)"
        singleImageProducer[0].style.cursor="pointer"
    }
    else if(AmountOfAllCookies>=100000)
    {
        singleImageProducer[4].style.filter ="brightness(100%)"
        singleImageProducer[0].style.cursor="pointer"
    }

}
const impossibilityToBuyProducer = () =>
{
    let AmountOfAllCookies = globalProduction.CurrentAmountOfCookies;
    let singleImageProducer = document.getElementById("producersOfCookies").getElementsByTagName("img")
    if(AmountOfAllCookies<10)
    {
        singleImageProducer[0].style.filter ="brightness(15%)"
        singleImageProducer[0].style.cursor="context-menu"
    }
    else if(AmountOfAllCookies<100)
    {
        singleImageProducer[1].style.filter ="brightness(15%)"
        singleImageProducer[0].style.cursor="context-menu"
    }
    else if(AmountOfAllCookies<1000)
    {
        singleImageProducer[2].style.filter ="brightness(15%)"
        singleImageProducer[0].style.cursor="context-menu"
    }
    else if(AmountOfAllCookies<10000)
    {
        singleImageProducer[3].style.filter ="brightness(15%)"
        singleImageProducer[0].style.cursor="context-menu"
    }
    else if(AmountOfAllCookies<100000)
    {
        singleImageProducer[4].style.filter ="brightness(15%)"
        singleImageProducer[0].style.cursor="context-menu"
    }

}