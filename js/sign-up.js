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
	}//Populate state/territory dropdown


	//Hear About Us "Other" selected action
	$('select[name="refer"]').change(function() {
		var referSelect = $(this); //Grab selected Hear About Us
		var otherInput = $('[name=refer-other]'); //Grab textbox of "specify other..."
		
		//If selected Hear About Us is "Other", show "specify other..." textbox.
		if('other' === referSelect.val().toLowerCase()) { 
			otherInput.removeAttr('disabled');
			otherInput.show();
			otherInput.focus();
		} else {
			otherInput.attr('disabled', true); //Put back "disabled" attribute if something else is selected
			otherInput.hide();
		}
	}); //Change Hear About Us dropdown


	//Signup form is submitted. Listens to <button type="submit".
	$('.signup-form').submit(function() {
		var signupForm = $(this); //wrap raw DOM <form> into JQ object to use JQ methods on it

		//(For Safari, IE9) Checks if "required" fields have a value. 
		var reqField;
		var reqValue;
		reqField = signupForm.find('input[name="first-name"]'); //Grab <input name="first-name">
		reqValue = reqField.val().trim(); //Grab its innerHTML
		if(0 === reqValue.length) {
			alert('Please enter a first name.');
			return false;
		}

		reqField = signupForm.find('input[name="last-name"]');
		reqValue = reqField.val().trim();
		if(0 === reqValue.length) {
			alert('Please enter a last name.');
			return false;
		}
		reqField = signupForm.find('input[name="email"]');
		reqValue = reqField.val().trim();
		if(0 === reqValue.length) {
			alert('Please enter an email address.');
			return false;
		}

		//If addr-1 has a value, zip must too
		var addr1Input = signupForm.find('input[name="addr-1"]'); //Select descendent <input name="addr-1"
		var addr1Value = addr1Input.val().trim(); //Gets current inner HTML of addrInput
		if (addr1Value && addr1Value.length > 0) { //If addrValue is not undefined and has content
			var zipInput = signupForm.find('input[name="zip"]');
			var zipValue = zipInput.val().trim();
			if (zipValue && zipValue.length > 0) {
				return true;
			} else {
				alert('Please enter a zip code.');
				return false;
			}
		}
	}); //Submit form submit


	//Cancel signup
	$('.cancel-signup').click(function() {
		$('.cancel-signup-modal').modal(); //modal() method provided by Bootstrap
	}); //cancel signup click

	$('.btn-abandon').click(function() {
		window.location = "http://www.google.com";
	});
}); //Document on ready