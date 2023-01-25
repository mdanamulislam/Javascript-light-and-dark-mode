let carList = document.getElementById("car-gallery");
function lightMode() {
   carList.classList.remove("dark-mode");
   carList.classList.add("light-mode");
}
function darkMode() {
   carList.classList.remove("light-mode");
   carList.classList.add("dark-mode");
}