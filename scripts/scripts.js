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
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

// Store the selected elements that we are going to use. 
const button = document.querySelector("#menu");
const nav = document.querySelector("nav");

button.addEventListener("click", () => {
  nav.classList.toggle("open");
  button.classList.toggle("open");
});