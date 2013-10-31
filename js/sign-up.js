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
}); //Document on ready