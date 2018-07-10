abstract class ProductionOfCoockiesByProducer {
     CoockiesPerSecond: number;
     CostOfSingleProducer: number;
}
class Producer extends ProductionOfCoockiesByProducer {
    public NameOfProducer: string;
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
    public CurrentAmountOfCookies:number=0;
    public GlobalProductionPerSecond:number=0;
}

let cursor = new Producer("Cursor",1,10)
let grandma = new Producer("Grandma",3,300)
let farm = new Producer("Cursor",10,1000)

let globalProduction = new GlobalProductionOfCoockies();

const addCoockieOnClick = ():void =>
{
    
    globalProduction.CurrentAmountOfCookies++;
    showGlobalProduction();
    ifProducerIsAvaibilityToBuy();
}

const purchaseCursorProducer = ():void =>
{
    if(globalProduction.CurrentAmountOfCookies>=10)
    {
        let placeForAmountOfCursor = document.getElementById("producersOfCookies").getElementsByTagName("div")[0].getElementsByTagName("p")[1]
        
        cursor.AmountOfPurchasedProducers++
        placeForAmountOfCursor.innerHTML = cursor.AmountOfPurchasedProducers.toString()
        globalProduction.CurrentAmountOfCookies-=10;
        ifProducerIsAvaibilityToBuy();
    }
}
const producerInfoArray = ():Array<any> =>
{
   let producerInformationArray:Array<any>;

    let placeForNameOfProducer = document.getElementById("producerInfo").getElementsByTagName("p")[0]
    let placeForProductionOfCursor = document.getElementById("producerInfo").getElementsByTagName("p")[1]
    let placeForProductionOfAllCursors = document.getElementById("producerInfo").getElementsByTagName("p")[2]
    let placeForAmountOfAllCursors = document.getElementById("producerInfo").getElementsByTagName("p")[3]
    
    producerInformationArray=[placeForNameOfProducer,placeForProductionOfCursor,placeForProductionOfAllCursors,placeForAmountOfAllCursors]
    return producerInformationArray
}
const showGlobalProduction =() =>
{
    document.getElementById("globalProduction").getElementsByTagName("h3")[0].innerHTML = "Cookies: " + globalProduction.CurrentAmountOfCookies.toString()
    document.getElementById("globalProduction").getElementsByTagName("p")[0].innerHTML = "per second: " + globalProduction.GlobalProductionPerSecond.toString()
}
const cursorProductionPerSecond = ():void =>
{
    let productionOfAllCursor = (cursor.AmountOfPurchasedProducers*cursor.CoockiesPerSecond)
    globalProduction.CurrentAmountOfCookies += productionOfAllCursor
    showGlobalProduction();
    ifProducerIsAvaibilityToBuy();
}


const productionOfEachProducerPerSecond = () =>
{
    setInterval(cursorProductionPerSecond, 1000);
}








const showCursorInfo =():void =>
{
    let producerInformationArray = producerInfoArray();
    let productionOfAllCursor = (cursor.AmountOfPurchasedProducers*cursor.CoockiesPerSecond)

    producerInformationArray[0].innerHTML =cursor.NameOfProducer
    producerInformationArray[1].innerHTML ="Each "+ cursor.NameOfProducer+" produce: "+cursor.CoockiesPerSecond.toString()+" cookies per sec";
    producerInformationArray[2].innerHTML = productionOfAllCursor.toString()+" Cursors produce "+ productionOfAllCursor;
    producerInformationArray[3].innerHTML ="Amount producer: "+cursor.AmountOfPurchasedProducers.toString();

}
const ifProducerIsAvaibilityToBuy = ():void =>
{
    possibilityToBuyProducer();
    impossibilityToBuyProducer();
}

const possibilityToBuyProducer = ():void =>
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
        singleImageProducer[1].style.cursor="pointer"
    }
    else if(AmountOfAllCookies>=1000)
    {
        singleImageProducer[2].style.filter ="brightness(100%)"
        singleImageProducer[2].style.cursor="pointer"
    }
    else if(AmountOfAllCookies>=10000)
    {
        singleImageProducer[3].style.filter ="brightness(100%)"
        singleImageProducer[3].style.cursor="pointer"
    }
    else if(AmountOfAllCookies>=100000)
    {
        singleImageProducer[4].style.filter ="brightness(100%)"
        singleImageProducer[4].style.cursor="pointer"
    }

}
const impossibilityToBuyProducer = ():void  =>
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
        singleImageProducer[1].style.cursor="context-menu"
    }
    else if(AmountOfAllCookies<1000)
    {
        singleImageProducer[2].style.filter ="brightness(15%)"
        singleImageProducer[2].style.cursor="context-menu"
    }
    else if(AmountOfAllCookies<10000)
    {
        singleImageProducer[3].style.filter ="brightness(15%)"
        singleImageProducer[3].style.cursor="context-menu"
    }
    else if(AmountOfAllCookies<100000)
    {
        singleImageProducer[4].style.filter ="brightness(15%)"
        singleImageProducer[4].style.cursor="context-menu"
    }

}