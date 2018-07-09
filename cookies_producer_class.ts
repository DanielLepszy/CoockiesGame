abstract class ProductionOfCoockiesByProducer {
     CoockiesPerSecond: number;
     CostOfSingleProducer: number;
}
class Producer extends ProductionOfCoockiesByProducer {
    private NameOfProducer: string;
    private AmountOfPurchasedProducers:number;
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

let cursor = new Producer("Cursor",1,100)
let grandma = new Producer("Grandma",3,300)
let farm = new Producer("Cursor",10,1000)


let NameOfProducer = document.getElementById("producerInfo").getElementsByTagName("p")[0]

let placeForAllCockies = document.getElementById("globalProduction").getElementsByTagName("p")[0]
let placeForGlobalProductionPerSecond = document.getElementById("globalProduction").getElementsByTagName("p")[3]

let globalProduction = new GlobalProductionOfCoockies();

const addCoockieOnClick = () =>
{
    globalProduction.CurrentAmountOfCookies = parseFloat(placeForAllCockies.textContent);
    globalProduction.CurrentAmountOfCookies = globalProduction.CurrentAmountOfCookies+1;
    placeForAllCockies.innerHTML=globalProduction.CurrentAmountOfCookies.toString();
}