$(document).ready(function () {

    //Open Database
    var request = indexedDB.open('cookies_data', 1)

    request.onupgradeneeded = function (e) {
        var db = e.target.result;

        if (!db.objectStoreNames.contains('cookies')) {

            var os = db.createObjectStore('cookies', {
                keyPath: "id",
                autoIncrement: false
            });
            os.createIndex('DataIndex', ["amount.cookies", "amount.cursors", "amount.grandmas", "amount.farms", "amount.factories", "amount.rockets", "amount.planets"], {
                unique: false
            });
        }
    }
    //Success
    request.onsuccess = function (e) {
        console.log("Database is open");
        db = e.target.result;
    }
});
//Add Data_Coockies
function addCoockiesData() {

    let amountOfCookies = $('#amountOfCookies').text();

    let amounfOfProducer = getReferencesToParagraph();

    let amountOfCursors = amounfOfProducer[0].textContent
    let amountOfGrandmas = amounfOfProducer[1].textContent
    let amountOfFactories = amounfOfProducer[2].textContent
    let amountOfFarms = amounfOfProducer[3].textContent
    let amountOfRockets = amounfOfProducer[4].textContent
    let amountOfPlanets = amounfOfProducer[5].textContent

    var transaction = db.transaction(["cookies"], "readwrite");

    //Ask for ObjectFor
    var store = transaction.objectStore("cookies");

    
    var request = store.put({
        id: 1,
        amount: {
            cookies: amountOfCookies,
            cursors: amountOfCursors,
            grandmas: amountOfGrandmas,
            farms: amountOfFarms,
            factories: amountOfFactories,
            rockets: amountOfRockets,
            planets: amountOfPlanets
        }
    })
   
    request.onsuccess = function (e) {
        window.location.href = "index.html"
    }
    // Error
    request.onerror = function (e) {
        console.log("Data was not added")
    }
}
//const saveGame = () => {
    $(document).ready(function () {
        $(window).bind("beforeunload", function () {
            addCoockiesData();
        });
    });
//}
const setValueFromData =(array) =>
{
        let amountOfCookies = $('#amountOfCookies');
    
        let amounfOfProducer = getReferencesToParagraph();
    
        let amountOfCursors = amounfOfProducer[0]
        let amountOfGrandmas = amounfOfProducer[1]
        let amountOfFarms = amounfOfProducer[2]
        let amountOfFactories = amounfOfProducer[3]
        let amountOfRockets = amounfOfProducer[4]
        let amountOfPlanets = amounfOfProducer[5]
    
        amountOfCookies.html(array[0]);

        amountOfCursors.innerHTML = array[0];
        amountOfGrandmas.innerHTML= array[2];
        amountOfFarms.innerHTML= array[3];
        amountOfFactories.innerHTML= array[4];
        amountOfRockets.innerHTML= array[5];
        amountOfPlanets.innerHTML= array[6];
}

const loadGame = () => {
    
    var request = indexedDB.open('cookies_data', 1)
    let dataArray = [];
    request.onsuccess = function () {
        var db = request.result;
        var transaction = db.transaction(["cookies"], "readonly");

        //Ask for ObjectStore
        var store = transaction.objectStore("cookies");
        var index = store.index('DataIndex')
        
        var getData = store.get(1);
        getData.onsuccess = function () {
          
            dataArray.push(
                getData.result.amount.cookies,
                getData.result.amount.cursors,
                getData.result.amount.grandmas,
                getData.result.amount.farms,
                getData.result.amount.factories,
                getData.result.amount.rockets,
                getData.result.amount.planets
            )
            setValueFromData(dataArray);
            
        };
    }
}
