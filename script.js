// Suerte :)


// let worldTime = http://worldtimeapi.org/;
// let timeIp = https://freegeoip.app/;


const button = document.getElementById('refresh')
const quote = document.querySelector('.quote-wrapper__random')
const time = document.querySelector('.time-now')
const locationGeo = document.querySelector('.currently__location')
const dayTime = document.querySelector('.currently__greeting');
const icon = document.querySelector('.icon');
const imagen = document.querySelector('.background');


window.addEventListener("load", async function () {
    let response = await fetch("https://api.quotable.io/random/");
    let quotea = await response.json();
    quote.textContent = quotea.content;
});

button.addEventListener("click", async function () {
    let response = await fetch("https://api.quotable.io/random/");
    let quotea = await response.json();
    quote.textContent = quotea.content;
});



window.addEventListener("load", async function () {
    let response = await fetch("http://worldtimeapi.org/api/ip");
    let timea = await response.json();
    let hour = timea.datetime.slice(11,12)
    let minut = timea.datetime.slice(14,16)
    let hour2 =parseInt(timea.datetime.slice(11,13))
   
    if(hour2 >= 5 && hour2 <= 12){
        dayTime.textContent = "Good morning";
    }else if (hour2 >= 12 && hour2 <= 18) {
        dayTime.textContent = "Good afternoon";
    }
    else{
    dayTime.textContent = "Good evening";
    }

    if(hour2 >= 5 && hour2 <= 18){
        icon.src = "/assets/desktop/icon-sun.svg";
        imagen.style.backgroundImage = "url(/assets/desktop/bg-image-daytime.jpg)"
    }
    else{
    icon.src = "/assets/desktop/icon-moon.svg"
            imagen.style.backgroundImage = "url(/assets/desktop/bg-image-daytime.jpg)"

    }


    
 // Check whether AM or PM
 var newformat = hour >= 12 ? 'AM' : 'PM'; 
                
 // Find current hour in AM-PM Format
 hour = hour % 12; 
 
 // To display "0" as "12"
 hour = hour ? hour : 12; 
 minut = minut < 10 ? '0' + minut : minut;
 time.textContent = hour + ':' + minut + ' ' + newformat
  




});

window.addEventListener("load", async function () {
    let response = await fetch("https://freegeoip.app/json");
    let locationGeoa = await response.json();
    locationGeo.textContent = "IN " + locationGeoa.region_name;    
});







