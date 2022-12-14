
// Our JSON object containing returned objects from search, currently just returns all objects in database


// Search terms from Search Page, via localStorage
let inputLocation  = localStorage.getItem('location');
let inputStartDate = localStorage.getItem('start-date');
let inputEndDate   = localStorage.getItem('end-date');
let inputGuests    = localStorage.getItem('guests');

// Search bar HTML elements
const srchBarLocation  = document.getElementById("srch-bar-location");
const srchBarStartDate = document.getElementById("srch-bar-start-date");
const srchBarEndDate   = document.getElementById("srch-bar-end-date");
const srchBarGuests    = document.getElementById("srch-bar-guests");
const srchBarButton    = document.getElementById("srch-bar-submit");

// Fill in value of search bar elements so search data carries over from Search Page
srchBarLocation.value = inputLocation;
srchBarStartDate.value = inputStartDate;
srchBarEndDate.value = inputEndDate;
srchBarGuests.value = inputGuests;

let locationFetchURL = 'http://localhost:8080/api/properties/?location=' + inputLocation;

srchBarButton.addEventListener("click", ()=>{
    localStorage.setItem('location', srchBarLocation.value);
    localStorage.setItem('start-date', srchBarStartDate.value);
    localStorage.setItem('end-date', srchBarEndDate.value);
    localStorage.setItem('guests', srchBarGuests.value);
    locationFetchURL = 'http://localhost:8080/api/properties/?location=' + srchBarLocation.value;
});



fetch(locationFetchURL)
    .then( res => res.json())
    .then( data => buildCards(data))

// builds template using property data received from FetchAPI call
function propertyTemplate(property){
    return `
        <div class="card" onclick="passData(${property.id})">
            <div class="card-image" style="background-image: url('Main1.JPG')"></div>
            <h2>${property.title}</h2>
            <p>${property.guests} guests - ${property.beds} bedrooms - ${property.baths} baths</p>
            <h3 class="price">${property.price}</h3>
        </div>
    `
}

// takes properties returned from search and builds a property card for each of them
function buildCards(propData) {
    document.getElementById("card-container").innerHTML = `
    <h1 id="heading">Results for stays in ${inputLocation}</h1>
    ${propData.map(propertyTemplate).join('')} 
`
}

// function that passes the property id of the property clicked on to the property-detailed page so that it knows which property to use to fill in template literal
function passData(propID){
    window.location.href = 'property-detailed.html' + '#' + propID;
}
const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    progress = document.querySelector(".slider .progress");

const adultPlus = document.getElementById("adult-plus"),
    adultMinus = document.getElementById("adult-minus"),
    adultNum = document.getElementById("adult-num"),
    childrenPlus = document.getElementById("children-plus"),
    childrenMinus = document.getElementById("children-minus"),
    childrenNum = document.getElementById("children-num");

// HTML elements for search functions
const filterPriceMin = document.getElementById("filter-price-min");
const filterPriceMax = document.getElementById("filter-price-max");
const filterSrchBtn = document.getElementById("filter-search-btn");


// Price slider filter API call (alled in rangeInput.forEach function below)
function filterSearchPrice(min, max) {

    var queryString = min + "," + max;
    console.log(queryString);

    fetch('http://localhost:8080/api/properties?price=' + queryString)
        .then( res => res.json())
        .then( data => buildCards(data))
}

// Property Type filter API call (
function filterSearchType () {
    //e.preventDefault();

    var urlString = "";
    let checkedFilters = document.querySelectorAll("input[type='checkbox']:checked");

    checkedFilters.forEach(function(checkbox) {
        if (checkbox.value.length !== 0 ){
            urlString += checkbox.value + ","
        }
    });
    console.log("Filter by: " + urlString);

    fetch('http://localhost:8080/api/properties?type=' + urlString)
        .then( res => res.json())
        .then( data => buildCards(data))


}


// Check box function (for search)
/*filterSrchBtn.addEventListener("click", ()=> {
    //e.preventDefault();

    console.log("Refresh button clicked");

    var queryString = "";
    let checkedFilters = document.querySelectorAll("input[type='checkbox']:checked");

    checkedFilters.forEach(function(checkbox) {
        if (checkbox.value.length !== 0 ){
            queryString += checkbox.value + ","
        }
    });
    console.log("Filter by: " + queryString);

    fetch('http://localhost:8080/api/properties?proptype=' + queryString)
        .then( res => res.json())
        .then( data => buildCards(data))

});*/














// Counter Buttons

let a = 0,
    c = 0;

adultPlus.addEventListener("click", ()=>{
    a++;
    a = (a<10) ? "0" + a : a;
    adultNum.innerText=a;
});

adultMinus.addEventListener("click", ()=>{
    if(a>0){
        a--;
        a = (a<10) ? "0" + a : a;
        adultNum.innerText=a;
    }
});

childrenPlus.addEventListener("click", ()=>{
    c++;
    c = (c<10) ? "0" + c : c;
    childrenNum.innerText=c;
});

childrenMinus.addEventListener("click", ()=>{
    if(c>0){
        c--;
        c = (c<10) ? "0" + c : c;
        childrenNum.innerText=c;
    }
});


//Price slider

let priceGap = 100;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        // getting two input values and parsing them to a number
        let minVal = parseInt(priceInput[0].value),
            maxVal = parseInt(priceInput[1].value);

        if((maxVal - minVal >= priceGap) && maxVal <=10000){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            }else{
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        }
    });
})

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        // getting two range values and parsing them to a number
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }

        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }

        filterSearchPrice(rangeInput[0].value, rangeInput[1].value);
    });
})