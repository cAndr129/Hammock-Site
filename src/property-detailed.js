/*
The property detailed js code includes opening modal for highlighting properties photos
*/


var propID = window.location.hash.substring(1)
var fetchURL = 'http://localhost:8080/api/properties/' + propID;

fetch(fetchURL)
    .then( res => res.json())
    .then( data => propertyTemplate(data));

function propertyTemplate(property){
    document.getElementById("main-container").innerHTML = `
    <div id="photo-container" class="photos">

                <img id="photo-1" class="photos" src="images/photos/Main1.JPG" alt="Main photo of location">

                <img id="photo-2" class="photos" src="images/photos/Main2.JPG" alt="">

                <img id="photo-3" class="photos" src="images/photos/Main3.JPG" alt="">

                <section id="photo-prev-container" class="photo-prev-container">

                    <img id="photo-prev-1" class="photo-prev" src="images/photos/Main1.JPG" alt="">
                    <img id="photo-prev-2" class="photo-prev" src="images/photos/Main1.JPG" alt="">
                    <img id="photo-prev-3" class="photo-prev" src="images/photos/Main1.JPG" alt="">
                    <img id="photo-prev-4" class="photo-prev" src="images/photos/Main1.JPG" alt="">
                    <img id="photo-prev-5" class="photo-prev" src="images/photos/Main1.JPG" alt="">
                    <img id="photo-prev-6" class="photo-prev" src="images/photos/Main1.JPG" alt="">
                    <img id="photo-prev-7" class="photo-prev" src="images/photos/Main1.JPG" alt="">
                    <img id="photo-prev-8" class="photo-prev" src="images/photos/Main1.JPG" alt="">
                    <p class="view-photos"><a href="">View all photos</a> </p>

                </section>

                <div class="photo-modal" id="photo-modal">
                    <img id="photo-large" src="images/properties/villa-main.jpg" alt="">
                </div>
                <div id="overlay"></div>
            </div>
    <div class="description-container">
                <div class="top-description">
                    <h1 id="name" class="top-description">${property.title}<strong>${property.price}</strong><small>/night</small></h1>
                </div>
                <h2 class="description">${property.guests} guest - ${property.beds} bed - ${property.baths} bath</h2>
                <div class="detailed-description-container">
                    <p class="description-detailed">
                        ${property.description}
                    </p>
                </div>
            </div>
    <div class="btn-group">
                <button class="saveToList-button">Save To List</button>
                <button class="contact-button" onclick="passData(${property.id})">Book Trip</button>
    </div>
    `
}
function passData(propID){
    console.log(propID);
    window.location.href = 'booking-page.html' + '#' + propID;
}

const overlay = document.getElementById('overlay')

// get elements for property images
const photo1 = document.getElementById('photo-1')
const photo2 = document.getElementById('photo-2')
const photo3 = document.getElementById('photo-3')
const photoPrev1 = document.getElementById('photo-prev-1')
const photoPrev2 = document.getElementById('photo-prev-2')
const photoPrev3 = document.getElementById('photo-prev-3')
const photoPrev4 = document.getElementById('photo-prev-4')
const photoPrev5 = document.getElementById('photo-prev-5')
const photoPrev6 = document.getElementById('photo-prev-6')
const photoPrev7 = document.getElementById('photo-prev-7')
const photoPrev8 = document.getElementById('photo-prev-8')

// Event listener for when user clicks outside of model. Closes model and overlay
overlay.addEventListener('click', ()=> {
    const modals = document.querySelectorAll('.photo-modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

// Opens modal
function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

// Closes modal
function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

/*  event listeners for when user clicks on photos */

photo1.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.photo-modal')
    document.getElementById('photo-large').src = "images/photos/Main1.JPG"

    modals.forEach(modal => {
        openModal(modal)
    })
})

photo2.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.photo-modal')
    document.getElementById('photo-large').src = "images/photos/Main2.JPG"

    modals.forEach(modal => {
        openModal(modal)
    })
})

photo3.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.photo-modal')
    document.getElementById('photo-large').src = "images/photos/Main3.JPG"

    modals.forEach(modal => {
        openModal(modal)
    })
})

photoPrev1.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.photo-modal')
    document.getElementById('photo-large').src = "images/photos/Main1.JPG"

    modals.forEach(modal => {
        openModal(modal)
    })
})

photoPrev2.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.photo-modal')
    document.getElementById('photo-large').src = "images/photos/Main1.JPG"

    modals.forEach(modal => {
        openModal(modal)
    })
})

photoPrev3.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.photo-modal')
    document.getElementById('photo-large').src = "images/photos/Main1.JPG"

    modals.forEach(modal => {
        openModal(modal)
    })
})

photoPrev4.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.photo-modal')
    document.getElementById('photo-large').src = "images/photos/Main1.JPG"

    modals.forEach(modal => {
        openModal(modal)
    })
})

photoPrev5.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.photo-modal')
    document.getElementById('photo-large').src = "images/photos/Main1.JPG"

    modals.forEach(modal => {
        openModal(modal)
    })
})

photoPrev6.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.photo-modal')
    document.getElementById('photo-large').src = "images/photos/Main1.JPG"

    modals.forEach(modal => {
        openModal(modal)
    })
})

photoPrev7.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.photo-modal')
    document.getElementById('photo-large').src = "images/photos/Main1.JPG"

    modals.forEach(modal => {
        openModal(modal)
    })
})

photoPrev8.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.photo-modal')
    document.getElementById('photo-large').src = "images/photos/Main1.JPG"

    modals.forEach(modal => {
        openModal(modal)
    })
})




















// Calendar js code. Not in use
/*
const date = new Date();

const renderCalendar = () =>{

    date.setDate(1);

    const monthDays = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(),
        date.getMonth()+1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(),
        date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(),
        date.getMonth()+1, 0).getDay();

    const nextDays = 7 - lastDayIndex -1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    document.querySelector('.date h1').innerHTML
        = months[date.getMonth()];

    document.querySelector('.date p').innerHTML
        = new Date().toDateString();

    let days = "";

    for(let x = firstDayIndex; x>0; x--){
        days += `<div class="prev-date">
    ${prevLastDay-x+1}</div>`;
    }

    for(let i = 1;i<=lastDay;i++){
        if(i===new Date().getDate() && date.getMonth() === new Date().getMonth()){
            //Highlight current day
            days+=`<div class="today">${i}</div>`;
        }else{
            days+=`<div>${i}</div>`;
        }
    }

    for(let j = 1; j<= nextDays; j++){
        days += `<div class="next-date">${j}</div>`
        monthDays.innerHTML = days;
    }
}


document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1)
    renderCalendar();
})

document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1)
    renderCalendar();
})

renderCalendar();
*/