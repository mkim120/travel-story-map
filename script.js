// Initialize map
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      //center: { lat: 40.4406, lng: -79.9959 }, // Pittsburgh, PA
      // for bigger viewport
      center: { lat: 30.0, lng: -153.0 }, // Approximate center point between Seoul and Pittsburgh
    });
  
    // Define locations with coordinates, names, and descriptions
    var locations = [
      {
        name: "Seoul, South Korea",
        description: "I was born in South Korea and immigrated to the United States when I was 7 years old. I don't remember much of my childhood in Korea, and I haven't been back since I left, so I look forward to one day returning for a visit.",
        lat: 37.5665,
        lng: 126.9780,
      },
      {
        name: "Pittsburgh, Pennsylvania",
        description: "After moving to the US, I've lived in the Greater Pittsburgh Area all my life. I also graduated from the University of Pitsburgh, and I'm proud to call this city my home.",
        lat: 40.4406,
        lng: -79.9959,
      },
      {
        name: "Dayton, Ohio",
        description: "Ever since elementary school, I've been a part of musical programs ranging from concert and marching bands to percussion ensembles and pep bands. While studying as an undergraduate student, I accomplished one of my greatest musical achievements when I joined an independent performing arts organization called Matrix and received a silver medal at the WGI indoor percussion world championships in Dayton, OH.",
        lat: 39.7589,
        lng: -84.1916,
      },
      {
        name: "Walt Disney World",
        description: "I was fortunate enough to travel to Orlando twice to perform on Disney's parade routes as a member of my high school marching band. Having never been to Disney before, these trips were some of my fondest experiences during my high school years.",
        lat: 28.3852,
        lng: -81.5639,
      },
      {
        name: "New York City",
        description: "In the past, I've explored Central Park and splurged in the shops around Times Square, but I've also had the opportunity to perform in Yankee Stadium with the Pitt Band for a college football game. I also have friends and relatives living in New Jersey, where there are plenty of places to visit like the American Dream Mall and waterfronts with views of the NYC skyline.",
        lat: 40.7128,
        lng: -74.0060,
      },
    ];

    // https://developers.google.com/maps/documentation/javascript/advanced-markers/overview
    // Advanced Markers to customize markers - change color, etc.
  
    // Create markers and info windows
    var infoWindows = [];
    var markers = locations.map(function (location) {
      var marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name,
      });
  
      var contentString =
        '<div id="content">' +
        '<h3>' +
        location.name +
        '</h3>' +
        '<p>' +
        location.description +
        '</p>' +
        "</div>";
  
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
  
      marker.addListener("click", function () {
        closeInfoWindows();
        infowindow.open(map, marker);
      });
  
      infoWindows.push(infowindow);
      return marker;
    });
  
    // Function to close all info windows
    function closeInfoWindows() {
      infoWindows.forEach(function (infoWindow) {
        infoWindow.close();
      });
    }

    // Add line between Seoul and Pittsburgh
    var seoul = new google.maps.LatLng(37.5665, 126.9780);
    var pittsburgh = new google.maps.LatLng(40.4406, -79.9959);

    var lineCoordinates = [seoul, pittsburgh];

    var line = new google.maps.Polyline({
        path: lineCoordinates,
        geodesic: true,
        strokeColor: "#FF0000", // Red color
        strokeOpacity: 1.0,
        strokeWeight: 3,
    });

    line.setMap(map);
}
  