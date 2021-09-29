let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(-12.101309520153901, -77.02574425616235),
    zoom: 16,
  });

  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const icons = {
    parking: {
      icon: iconBase + "parking_lot_maps.png",
    },
    library: {
      icon: iconBase + "library_maps.png",
    },
    info: {
      icon: iconBase + "info-i_maps.png",
    },
  };

  const features = [
    {
      position: new google.maps.LatLng(-12.10135506272733, -77.02579414525093),
      type: "library",
      title: "example1",
      modalData:{
          title:"PROINNOVATE",
          description:"point PRO INNOVATE"
      } 
    },
    {
      position: new google.maps.LatLng(-12.096986563961174, -77.0243834629541),
      type: "parking",
      modalData:{
        title:"PARADERO DE LA 9",
        description:"Usar Protector facial para subir al Bus"
      }
    }  
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });

    const infowindow = new google.maps.InfoWindow({
        content: modalContent(features[i].modalData.title, features[i].modalData.description),
      });

    

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
}

function modalContent(title, description){
    const contentString =
    `<div id="content">
    <div id="siteNotice"> 
    </div>
    <h1 id="firstHeading" class="firstHeading">${title}</h1>
    <div id="bodyContent">
    <p>${description} </p>
    </div>
    </div>`;

    return contentString;
}