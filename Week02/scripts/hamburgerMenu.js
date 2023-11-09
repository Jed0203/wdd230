// Store the selected elements that we are going to use. 
const navigation = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hambutton.classList.toggle('open');
});