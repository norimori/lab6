//signup.js 
// add your JavaScript code to this file

//Document on ready
$(function() {
	//Document is now ready for manipulation
	var stateSelect = $('.us-states');
	var i;
	var state;
	var stateOption;
	for (i = 0; i < usStates.length; i++) {
		state = usStates[i]; //Grab current object
		
		//Create new option element; populate; append
		stateOption = $(document.createElement('option')); //Create new <option> tag
		stateOption.attr('value', state.abbreviation); //Put looping object's "abbreviation" property into <option value=
		stateOption.html(state.name); //Insert looping object's "name" attribute into inner HTML of <option>
		stateSelect.append(stateOption); //Append populated <option> to <select>
	}

	//Signup form is submitted. Listens to <button type="submit".
	$('.signup-form').submit(function() {
		var signupForm = $(this); //wrap raw DOM <form> into JQ object to use JQ methods on it

		//If addr-1 has a value, zip must too
		var addr1Input = signupForm.find('input[name="addr-1"]'); //Select descendent <input name="addr-1"
		var addr1Value = addr1Input.val(); //Gets current inner HTML of addrInput
		if (addr1Value && addr1Value.trim().length > 0) { //If addrValue is not undefined and has content
			var zipInput = signupForm.find('input[name="zip"]');
			var zipValue = zipInput.val();
			if (zipValue && zipValue.trim().length > 0) {
				return true;
			} else {
				alert('Please enter a zip code.');
				return false;
			}
		}
	}); 

	//Cancel signup
	$('.cancel-signup').click(function() {
		window.location = "http://www.google.com"
	});
}); //Document on ready