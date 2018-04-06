// JAVASCRIPT PARA ACORDEON
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight){
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	});
}


// JAVASCRIPT PARA DISPLAY DE LIBRETA
var contactBook = document.getElementById('empty-msg');

if(localStorage.length < 1){
	contactBook.innerHTML= '<p class="empty-msg">ADD A NEW FRIEND BUDDY</p>'
} else{
	/* ADD MAGIC HERE */ 
}

// JAVASCRIPT PARA FORMULARIO
function isEmpty(str) {
	return (!str || 0 === str.length);
}


var form = document.addContactForm;
form.addEventListener("submit", event => {
	event.preventDefault();
	var phone = form.elements.phone.value;
	var name = form.elements.firstName.value;
	var errorPhone = document.getElementById('errorPhone');
	var errorName = document.getElementById('errorName');
	if(isEmpty(phone)){
		errorPhone.innerHTML = "You must enter a phone";
		errorPhone.classList.add('visible');
	} else{
		errorPhone.innerHTML = "";
		errorPhone.classList.remove('visible');
	}
	if(isEmpty(name)){
		errorName.innerHTML = "You must enter a name";
		errorName.classList.add('visible');
		//refactorizar esto a poner dos clases, una xa los span y otra xa cambiar la ralla de los campos
	} else{
		errorName.innerHTML = "";
		errorName.classList.remove('visible');
	}

function addNewContact(name,phone){

};
});