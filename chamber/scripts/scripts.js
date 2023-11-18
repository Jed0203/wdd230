/* Last Modification Date*/

//Display the year at the bottom of the page
const todaysDate = new Date();
document.getElementById("year").textContent = todaysDate.getFullYear();

// Display the last modified date
document.getElementById("lastModified").textContent = document.lastModified;

//DropDown Menu Configuration
const button = document.querySelector("#menu");
const navList = document.querySelector("nav");
button.addEventListener("click", () => {
  navList.classList.toggle("open");
});