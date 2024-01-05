let arrayyy= [];
const mainData = new Date();
let monthsMain = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let getmonths=monthsMain[mainData.getMonth()]
let daysMain = ["Sunday", "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
let getDayss= daysMain[mainData.getDay()]
let SearchInput2 = document.getElementById('findLocation2');
let SearchInput = document.getElementById('findLocation');
// SearchInput.addEventListener('keyup' , function () {
//     let search = SearchInput.value;
//     getApi(search)
// })    
SearchInput2.addEventListener('click' , function () {
    let search = SearchInput.value;
    getApi(search)
})
async function getApi(e){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d7771c86e74842a4afd201906240201&q=${e}&days=3 `)
    let result= await response.json();
    arrayyy = result;
    firstElement(result);
    tomorrowApi(result);
}
function firstElement(first) {
    let firstData = ''
    firstData =`
    <div class="col-12  ">
    <div class="card bg-specialCard text-white ">
        <div class="d-flex justify-content-between p-3 ">
            <p>${getDayss}</p>
            <p id="dateWeather">${mainData.getDay()}  / ${getmonths}</p>
        </div>
        <section>
            <h2 id="idName" class="mb-4 ps-3">${first.location.name} ${first.location.region} ${first.location.country}</h2>
            <div class="d-flex justify-content-between px-3">
                <h2  id="tempreture" class="fs-1">${first.current.temp_c}<sup class="fs-1"></sup><span></span></h2>
                    <img id="iconWeather" src="https:${first.current.condition.icon}" alt="">
            </div>
            <div class="d-flex justify-content-around  ">
            <div><i class="fa-solid fa-droplet"></i> ${first.current.humidity}%</div>
            <div>  <i class="fa-solid fa-wind"></i> ${first.current.wind_kph}km/h</div>
            <div> <i class="fa-regular fa-compass"></i> ${first.current.wind_dir}</div>
                </div>
            <p id="statusWeather" class="mt-3 ps-3">${first.current.condition.text}</p>
            </section>
            </div>
            </div>
            `
            document.getElementById('cahangeDefultElement').innerHTML= firstData;
}
getApi('cairo')
function tomorrowApi(getDays) {
    hambozo = '';
    for (let i = 0; i < 2; i++) {
        let dateChange =  getDays.forecast.forecastday[i+1].date
        let newDate =new Date(dateChange);
        let finallyDate = daysMain[newDate.getDay()]
        let forecast = getDays.forecast.forecastday[i+1];
        hambozo += 
        `
        <div  class="col-lg-6 col-md-12 mt-2 ">
            <div class="card bg-specialCard text-white">
                <div class="text-center p-3 ">
                    <p id="dateWeatherAnother">${finallyDate}</p>
                </div>
                <section>
                    <h2 id="idNameAnother" class="mb-4 ps-3 text-center">${getDays.location.name} ${getDays.location.region} ${getDays.location.country}</h2>
                    <div class="text-center px-3">
                        <h2 id="tempretureAnother" class="fs-3 ">${forecast.day.maxtemp_c}<sup class="fs-3">o</sup><span>C</span></h2>
                        <h2 id="tempretureAnother2" class="fs-5 mt-1">${forecast.day.mintemp_c}<sup class="fs-5">o</sup><span>C</span></h2>
                    </div>
                    <p id="statusWeatherAnother" class="mt-3 ps-3">${forecast.day.condition.text}</p>
                </section>
            </div>
            </div>
        `
    }
    document.getElementById('cahange').innerHTML= hambozo;
    
}


/* 
let arrayApi = [];
let dateMain= new Date();
let daysMain = ["Sunday", "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
let monthMain = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let allDays = daysMain[dateMain.getDay()];
let allMonth =monthMain[dateMain.getMonth()];

let findLocation2 = document.getElementById('findLocation2');
let findLocation = document.getElementById('findLocation');
findLocation2.addEventListener('click' , function (eventInfo) {
    let SearchInput = findLocation.value
    getApis(SearchInput);

})
async function getApis(e) {
    let fetchApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d7771c86e74842a4afd201906240201&q=${e}&days=7`)
    let responseApi = await fetchApi.json();
    arrayApi = responseApi;
    console.log(responseApi);
    firstData(arrayApi);
    secondeData(arrayApi)    
}
let cairo=getApis('cairo');
console.log(cairo);
function firstData(first) {
    let firstData = ''
    firstData =`
    <div class="col-12  ">
    <div class="card bg-specialCard text-white ">
        <div class="d-flex justify-content-between p-3 ">
            <p>${allDays}</p>
            <p id="dateWeather">${dateMain.getDay()}  / ${allMonth}</p>
        </div>
        <section>
            <h2 id="idName" class="mb-4 ps-3">${first.location.name} ${first.location.region} ${first.location.country}</h2>
            <div class="d-flex justify-content-between px-3">
                <h2  id="tempreture" class="fs-1">${first.current.temp_c}<sup class="fs-1"></sup><span></span></h2>
                    <img id="iconWeather" src="https:${first.current.condition.icon}" alt="">
            </div>
            <p id="statusWeather" class="mt-3 ps-3">${first.current.condition.text}</p>
            </section>
            </div>
            </div>
            `
            document.getElementById('cahangeDefultElement').innerHTML= firstData;
}

function secondeData(seconde) {
    let hambozo = '';
    for (let i = 0; i <2; i++) {
        let getDte = seconde.forecast.forecastday[i+1].date;
        let newDateSeconde = new Date(getDte);
        let finalDate = daysMain[newDateSeconde.getDay()];
        let forcast = seconde.forecast.forecastday[i+1];
        console.log(finalDate);
        hambozo +=
        `
        <div  class="col-lg-6 col-md-12 mt-2 ">
            <div class="card bg-specialCard text-white">
                <div class="text-center p-3">
                    <p id="dateWeatherAnother">${finalDate}</p>
                </div>
                <section>
                    <h2 id="idNameAnother" class="mb-4 ps-3 text-center">${seconde.location.name} ${seconde.location.region} ${seconde.location.country}</h2>
                    <div class="text-center px-3">
                        <h2 id="tempretureAnother" class="fs-3 ">${forcast.day.maxtemp_c}<sup class="fs-3">o</sup><span>C</span></h2>
                        <h2 id="tempretureAnother2" class="fs-5 mt-1">${forcast.day.mintemp_c}<sup class="fs-5">o</sup><span>C</span></h2>
                    </div>
                    <p id="statusWeatherAnother" class="mt-3 ps-3">${forcast.day.condition.text}</p>
                </section>
            </div>
            </div>
        `
        document.getElementById('cahange').innerHTML= hambozo;

    }
}
 */