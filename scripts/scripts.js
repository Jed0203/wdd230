const currentDate = new Date();
const currentYear = currentDate.getFullYear();

let year = document.getElementById('currentYear');
year.innerHTML = currentYear;

// Get the last modified date and time
const lastModified = document.lastModified;

// Display the last modified date and time on the page
const displayElement = document.getElementById('lastModified');
if (displayElement) {
    displayElement.textContent = "Last modified: " + lastModified;
}

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
});