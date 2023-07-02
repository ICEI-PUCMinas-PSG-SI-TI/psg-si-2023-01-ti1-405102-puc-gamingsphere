console.log("x")
document.addEventListener("DOMContentLoaded", function() {
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentItemIndex = 0;
  console.log("ax")
  function showNextItem() {
    carouselItems[currentItemIndex].classList.remove("active");
    currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
    carouselItems[currentItemIndex].classList.add("active");
  }

  setInterval(showNextItem, 3000);
});
// Initialize and add the map
console.log("sx")
function initMap() {
  // The location of Uluru
  console.log("qezsx")
  const uluru = { lat: -23.5106011, lng: -46.6120581 };
  // The map, centered at Uluru
  
  console.log("ezsx")
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru,
  });
  console.log("zsx")
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;