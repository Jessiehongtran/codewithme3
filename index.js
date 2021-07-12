let googlemap

//function to initiate map
function initMap(){
    console.log('this function is invoked')
    let initialCoors = {
        lat: 37.1758,
        lng: -121.48
    }
    let mapOptions = {
        center: initialCoors,
        zoom: 10
    }
    googlemap = new google.maps.Map(document.getElementById("map"), mapOptions)
    
}

//function to add marker
function addMarker(googlemap, location){
    new google.maps.Marker({ 
                    position: location, 
                    map: googlemap
    })

}

//function to get location (GPS)
function getLocation(){
    navigator.geolocation.getCurrentPosition(function (pos){
        let lat = pos.coords.latitude;
        let lng = pos.coords.longitude;
        if (lat == null){
            alert("GPS not activated!");
        } else {
            let curLocation = new google.maps.LatLng(lat, lng)
            addMarker(googlemap, curLocation)
        }
    })
}

getLocation()

//allow people to add a marker