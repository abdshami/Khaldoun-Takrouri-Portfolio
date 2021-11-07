


// Array of Locations

const locations = [
    {
      cityName: 'Jerusalem',
      lat: 31.767990574794702,
      lng: 35.21656023314248,
    }
          ,
    {
      cityName: 'cairo',
      lat: 30.044016994837932,
      lng: 31.2337476626655
    }
        ,
    {
      cityName: 'Antalya',
      lat: 36.91191813968385,
      lng: 30.67759531700182
    }
        ,
    {
      cityName: 'Boston',
      lat: 42.34696968590205,
      lng: -71.1026115355677
    }
];


// Initialize variables
let map;
let markers = [];
var index = 1;

 // Initialize and add the map
let map1 = document.getElementById("map");




 // Initialize and add the map
function initMap() {
      
      // The location of loc
      const loc = { lat:  locations[index].lat, lng: locations[index].lng  };
      // The map, centered at Uluru
      const map = new google.maps.Map(map1, {
      zoom: 14,
      center: loc,

});

//Add all the cities locations as markers on the map ,The map positioned at Jerusalem


for (let i=0 ; i<locations.length; i++){
          new google.maps.Marker({
          position: { lat: locations[i].lat, lng: locations[i].lng },
          map: map,
          title: locations[i].cityName,
        
      });
    
}

// Define the buttons
var btnNext = document.getElementById("btn-next");
var btnPrev = document.getElementById("btn-prev");

btnNext.addEventListener("click", moveToNextLocation);
btnPrev.addEventListener("click", moveToPrevLocation);  


function moveToNextLocation(){
      
  if (index < 3){

    index++;
    let center = new google.maps.LatLng(locations[index].lat, locations[index].lng);
    map.panTo(center);

    if (index === 1){
        btnPrev.classList.remove("hide");
    }

    if (index === 3){
        btnNext.classList.add("hide");
    }
  }
      
}

function moveToPrevLocation(){
    
  if (index > 0){
   
      index--;
      let center = new google.maps.LatLng(locations[index].lat, locations[index].lng);
      map.panTo(center);
      
      if (index === 2){
        btnNext.classList.remove("hide");
      }

      if (index === 0){
          btnPrev.classList.add("hide");
      }

        
  }    

}    





}
    
