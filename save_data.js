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

    var amountOfCookies = $('#amountOfCookies').text();

    let amountOfCursors = document.getElementById("producersOfCookies").getElementsByTagName("div")[0].getElementsByTagName("p")[1].textContent
    let amountOfGrandmas = document.getElementById("producersOfCookies").getElementsByTagName("div")[1].getElementsByTagName("p")[1].textContent
    let amountOfFactories = document.getElementById("producersOfCookies").getElementsByTagName("div")[2].getElementsByTagName("p")[1].textContent
    let amountOfFarms = document.getElementById("producersOfCookies").getElementsByTagName("div")[3].getElementsByTagName("p")[1].textContent
    let amountOfRockets = document.getElementById("producersOfCookies").getElementsByTagName("div")[4].getElementsByTagName("p")[1].textContent
    let amountOfPlanets = document.getElementById("producersOfCookies").getElementsByTagName("div")[5].getElementsByTagName("p")[1].textContent

    var transaction = db.transaction(["cookies"], "readwrite");

    //Ask for ObjectFor
    var store = transaction.objectStore("cookies");

    //Define Customer
    // var data = {
    //     Purchased_Coockies: amountOfCookies,
    //     Cursors_Amount:amountOfCursors,
    //     Grandma_Amount:amountOfGrandmas,
    //     Farms_Amount:amountOfFarms,
    //     Factories_Amount:amountOfFactories,
    //     Rocket__Amount:amountOfRockets,
    //     Planet_Amount:amountOfPlanets
    // }
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
    //Perform the Add
    //var request = store.add(data);
    //Success
    request.onsuccess = function (e) {
        window.location.href = "index.html"
    }
    // Error
    request.onerror = function (e) {
        console.log("Data was not added")
    }
}
const saveGame = () => {
    $(document).ready(function () {
        $(window).bind("beforeunload", function () {
            addCoockiesData();
        });
    });
}
const loadGame = () => {
    var request = indexedDB.open('cookies_data', 1)

    request.onsuccess = function () {
        var db = request.result;
        var transaction = db.transaction(["cookies"], "readonly");

        //Ask for ObjectStore
        var store = transaction.objectStore("cookies");
        var index = store.index('DataIndex')

        var getData = store.get(1);
        getData.onsuccess = function () {
            console.log(getData.result.amount.cookies); // => "Johns"
        };
    }

}