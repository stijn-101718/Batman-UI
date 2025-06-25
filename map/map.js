function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.0060 }, // Example: NYC
    zoom: 12,
    styles: [
      {
        elementType: "geometry",
        stylers: [{ color: "#2b0000" }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#300000" }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#ffcccc" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#440000" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#220000" }]
      }
    ]
  });
}