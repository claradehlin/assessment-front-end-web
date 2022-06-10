console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Yay! Your form has been submitted successfully!');

}
let image = document.getElementById("image");
image.addEventListener("mouseover", function( event ) {
	alert("I just think you're super cool!")
})


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);