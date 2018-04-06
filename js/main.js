// JAVASCRIPT PARA ACORDEON 
function accordion() {
	var acc = document.getElementsByClassName("accordion");

	for (var i = 0; i < acc.length; i++) {
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
}
accordion();

/* -------------------------- NEW FILE ---------------------------------- */

// JAVASCRIPT PARA DISPLAY DE LIBRETA
var contactBook = document.getElementById('empty-msg');

if(localStorage.length < 1){
	contactBook.innerHTML= '<p class="empty-msg">ADD A NEW FRIEND BUDDY</p>'
} else{
	/* ADD MAGIC HERE */ 
}



// JAVASCRIPT PARA FORMULARIO
var form = document.addContactForm;
var phoneInput = form.elements.phone;
var nameInput = form.elements.firstName;
var phone = phoneInput.value;
var name = nameInput.value;
var phoneError = document.getElementById('phoneError');
var nameError = document.getElementById('nameError');

function isEmpty(str) {
	return (!str || 0 === str.length);
}
function removeError(input,textError){
	textError.innerHTML = "";
	textError.classList.remove('visible');
	input.classList.remove('wrong');
}
function showError(input,textError,errorMessage){
	textError.innerHTML = errorMessage;
	textError.classList.add('visible');
	input.classList.add('wrong');
}

// EL ERROR CON ESO ME VALE 

function formQualityControl(){

	nameInput.addEventListener("focus", event=> {
		removeError(nameInput,nameError);
	});
	nameInput.addEventListener("focusout", event=> {
		name = nameInput.value;
		if(isEmpty(name)){
			showError(nameInput,nameError,"You must enter a name");
		} else{
			removeError(nameInput,nameError);
		}
	})

	phoneInput.addEventListener("focus", event => {
		removeError(phoneInput,phoneError);
	});

	phoneInput.addEventListener("focusout", event => {
		phone = phoneInput.value;
		if(isEmpty(phone)){
			showError(phoneInput,phoneError,"You must enter a phone");
		} else{
			removeError(phoneInput,phoneError);
		}
	})

	form.addEventListener("submit", event => {
		event.preventDefault();
		var errors = false;
		
		if(isEmpty(phone)){
			showError(phoneInput,phoneError,"You must enter a phone");
			errors = true;
		} else{
			removeError(phoneInput,phoneError);
		}
		if(isEmpty(name)){
			showError(nameInput,nameError,"You must enter a name");
			errors = true;
		} else{
			removeError(nameInput,nameError);
		}
		if(!errors){
			if(addNewContact(name,phone)){
				showNewContact(name);
				nameInput.value = "";
				phoneInput.value = "";
				// INSERTAR MENSAJE DE VERIFICACION DE CONTACTO


			}

		}
	});
}
formQualityControl();

function addNewContact(name,phone){
    localStorage.setItem(name, phone);
};
function showNewContact(key){
	
	localStorage.getItem(key);
}