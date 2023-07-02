document.addEventListener("DOMContentLoaded", function() {
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentItemIndex = 0;

  function showNextItem() {
    carouselItems[currentItemIndex].classList.remove("active");
    currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
    carouselItems[currentItemIndex].classList.add("active");
  }

  setInterval(showNextItem, 3000);
});
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 40.6971494, lng: -74.2598655 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
