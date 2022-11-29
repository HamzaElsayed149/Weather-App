


( async function currentcity(){
    var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2a652f5b58bc43e791412223222911&q=alexandria&days=5&aqi=yes&`)
 var final = await res.json();
( function display (){ 
    var curdata = ``
     curdata += `  
<h2 class="fw-bolder fs-1 pt-5">${final.location.name}</h2>
<p class="fs-5 mb-4 text-white-50 "  >"${final.current.condition.text}"</p>
<img src="${final.current.condition.icon}" alt="" class="mb-4 main">
<p class="fw-bolder  bg-circle position-relative mb-5">${final.current.temp_c+"°"}</p>
<p class="fs-5  text-white-50 "  >last Update:</p>
<p class="fs-5 mb-5 text-white-50 "  >"${final.current.last_updated}"</p>`
document.getElementById("current").innerHTML =curdata;
})()
})();




 async function city(city){
    var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2a652f5b58bc43e791412223222911&q=${city}&days=5&aqi=yes&`)
 var final = await res.json();
( function display (){ 
    var curdata = ``
     curdata += `    
<h2 class="fw-bolder fs-1 pt-5">${final.location.name}</h2>
<p class="fs-5 mb-4 text-white-50 "  >"${final.current.condition.text}"</p>
<img src="${final.current.condition.icon}" alt="" class="mb-4 main">
<p class="fw-bolder  bg-circle position-relative mb-5">${final.current.temp_c+"°"}</p>
<p class="fs-5  text-white-50 "  >last Update:</p>

<p class="fs-5 mb-5 text-white-50 "  >"${final.current.last_updated}"</p>

`

timeline(city);
Highlights(city)

document.getElementById("current").innerHTML =curdata;

})()
};


 async function timeline(city){
    var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2a652f5b58bc43e791412223222911&q=${city}&days=6&aqi=yes&`)
 var final = await res.json();
( function display (){ 
    var curdata = ``
     curdata += `  <div class="col-sm-12 col-md-3 col-lg">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <div>
             <img src="${final.forecast.forecastday[1].day.condition.icon}"  alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[1].day.avgtemp_c}°</p>
             <p class=" fs-6 text-primary fst-italic mb-1">${final.forecast.forecastday[1].day.condition.text}</p>

             <p class="fw-bolder ">${final.forecast.forecastday[1].date}</p>
         </div>
     </div>
     </div>

     <div class="col-sm-12 col-md-3 col-lg">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <div>
             <img src="${final.forecast.forecastday[2].day.condition.icon}"  alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[2].day.avgtemp_c}°</p>
             <p class=" fs-6 text-primary fst-italic mb-1">${final.forecast.forecastday[2].day.condition.text}</p>

             <p class="fw-bolder ">${final.forecast.forecastday[2].date}</p>
         </div>

     </div>


     </div>
     <div class="col-sm-12 col-md-3 col-lg">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <div>
             <img src="${final.forecast.forecastday[3].day.condition.icon}"  alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[3].day.avgtemp_c}°</p>
             <p class=" fs-6 text-primary fst-italic mb-1">${final.forecast.forecastday[3].day.condition.text}</p>

             <p class="fw-bolder ">${final.forecast.forecastday[3].date}</p>
         </div>

     </div>


     </div>
     <div class="col-sm-12 col-md-3 col-lg">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <div>
             <img src="${final.forecast.forecastday[4].day.condition.icon}"  alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[4].day.avgtemp_c}°</p>
             <p class=" fs-6 text-primary fst-italic mb-1">${final.forecast.forecastday[4].day.condition.text}</p>

             <p class="fw-bolder ">${final.forecast.forecastday[4].date}</p>
         </div>

     </div>


     </div>
     <div class="col-sm-12 col-md-3 col-lg">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <div>
             <img src="${final.forecast.forecastday[5].day.condition.icon}"  alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[5].day.avgtemp_c}°</p>
             <p class=" fs-6 text-primary mb-1 fst-italic">${final.forecast.forecastday[5].day.condition.text}</p>

             <p class="fw-bolder ">${final.forecast.forecastday[5].date}</p>
         </div>

     </div>


     </div>

`
 
document.getElementById("timeline").innerHTML =curdata;

})()
};




( async function currenttimeline(){
    var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2a652f5b58bc43e791412223222911&q=alexandria&days=6&aqi=yes&`)
 var final = await res.json();
( function display (){ 
    var curdata = ``
     curdata += `  <div class="col-sm-12 col-md-3 col-lg">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <div>
             <img src="${final.forecast.forecastday[1].day.condition.icon}"  alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[1].day.avgtemp_c}°</p>
             <p class=" fs-6 text-primary fst-italic mb-1">${final.forecast.forecastday[1].day.condition.text}</p>

             <p class="fw-bolder ">${final.forecast.forecastday[1].date}</p>
         </div>
     </div>
     </div>

     <div class="col-sm-12 col-md-3 col-lg">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <div>
             <img src="${final.forecast.forecastday[2].day.condition.icon}"  alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[2].day.avgtemp_c}°</p>
             <p class=" fs-6 text-primary fst-italic mb-1">${final.forecast.forecastday[2].day.condition.text}</p>

             <p class="fw-bolder ">${final.forecast.forecastday[2].date}</p>
         </div>

     </div>


     </div>
     <div class="col-sm-12 col-md-3 col-lg">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <div>
             <img src="${final.forecast.forecastday[3].day.condition.icon}"  alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[3].day.avgtemp_c}°</p>
             <p class=" fs-6 text-primary fst-italic mb-1">${final.forecast.forecastday[3].day.condition.text}</p>

             <p class="fw-bolder ">${final.forecast.forecastday[3].date}</p>
         </div>

     </div>


     </div>
     <div class="col-sm-12 col-md-3 col-lg">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <div>
             <img src="${final.forecast.forecastday[4].day.condition.icon}"  alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[4].day.avgtemp_c}°</p>
             <p class=" fs-6 text-primary fst-italic mb-1">${final.forecast.forecastday[4].day.condition.text}</p>

             <p class="fw-bolder ">${final.forecast.forecastday[4].date}</p>
         </div>

     </div>


     </div>
     <div class="col-sm-12 col-md-3 col-lg">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <div>
             <img src="${final.forecast.forecastday[5].day.condition.icon}"  alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[5].day.avgtemp_c}°</p>
             <p class=" fs-6 text-primary mb-1 fst-italic">${final.forecast.forecastday[5].day.condition.text}</p>

             <p class="fw-bolder ">${final.forecast.forecastday[5].date}</p>
         </div>

     </div>


     </div>

`
 
document.getElementById("timeline").innerHTML =curdata;

})()
})();


( async function currentHighlights(){
    var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2a652f5b58bc43e791412223222911&q=alexandria&days=6&aqi=yes&`)
 var final = await res.json();
 
( function display (){ 
    var curdata = ``
     curdata += `      <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 colored">chance of rain</p>

         <div>
             <img src="weather/64x64/night/308.png" class="mb-2" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
         </div>

     </div>
 </div>
 <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 mb-2 colored">Wind direction</p>

         <div>
             <img src="4336206.png" class="mb-3  compass" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">"${final.current.wind_dir}"</p>
         </div>

     </div>
 </div>

  <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 mb-2 colored">Wind</p>

         <div>
             <img src="img_568683 (1).png" class="mb-3  wind" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.current.wind_kph}kph</p>
         </div>

     </div>
 </div>

 <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 mb-2 colored">Max Temp</p>

         <div>
             <img src="21374267471600621651-128.png" class="mb-3 tmp" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[0].day.maxtemp_c}°</p>
         </div>

     </div>
 </div>
 <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 mb-2 colored">Min Temp</p>

         <div>
             <img src="1035619.png" class="mb-3 tmp" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[0].day.mintemp_c}°</p>
         </div>

     </div>
 </div>
 <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 mb-2 colored">humidity</p>

         <div>
             <img src="humidity-4623.png" class="mb-3 humidity" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.current.humidity}%</p>
         </div>

     </div>
 </div>`
 
document.getElementById("Highlights").innerHTML =curdata;

})()
})();

async function Highlights(city){
    var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2a652f5b58bc43e791412223222911&q=${city}&days=6&aqi=yes&`)
 var final = await res.json();
( function display (){ 
    var curdata = ``
     curdata += `      <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 colored">chance of rain</p>

         <div>
             <img src="weather/64x64/night/308.png" class="mb-2" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
         </div>

     </div>
 </div>
 <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 mb-2 colored">Wind direction</p>

         <div>
             <img src="4336206.png" class="mb-3  compass" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">"${final.current.wind_dir}"</p>
         </div>

     </div>
 </div>

  <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 mb-2 colored">Wind</p>

         <div>
             <img src="img_568683 (1).png" class="mb-3  wind" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.current.wind_kph}kph</p>
         </div>

     </div>
 </div>

 <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 mb-2 colored">Max Temp</p>

         <div>
             <img src="21374267471600621651-128.png" class="mb-3 tmp" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[0].day.maxtemp_c}°</p>
         </div>

     </div>
 </div>
 <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 mb-2 colored">Min Temp</p>

         <div>
             <img src="1035619.png" class="mb-3 tmp" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.forecast.forecastday[0].day.mintemp_c}°</p>
         </div>

     </div>
 </div>
 <div class="col-sm-12 col-md-4 ">
     <div class="card bg-white justify-content-center align-items-center text-center">
         <p class="fw-bolder pt-2 mb-2 colored">humidity</p>

         <div>
             <img src="humidity-4623.png" class="mb-3 humidity" alt="">
         </div>
         <div class="inform">
             <p class="fw-bolder ">${final.current.humidity}%</p>
         </div>

     </div>
 </div>`
 
document.getElementById("Highlights").innerHTML =curdata;

})()
};




