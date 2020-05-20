let count = 1;
function chips(message, timeRemove = 3000) {
	let chips = document.createElement('div');
	chips.classList.add('chips');
	chips.innerHTML = message;
	// document.querySelector('body').appendChild(chips);
	addChips(chips);
	setTimeout(function(){deleteChips(chips)}, timeRemove);
}
document.querySelector('button').onclick = function () {
	chips('hello!', 2000);
};
function deleteChips (chips) {
	chips.remove();
	let allChips = document.querySelectorAll('.chips-field .chips');
	if (allChips.length == 0) {
		document.querySelector('.chips-field').remove();
	} else {
		
	}
}

function addChips (chips) {
	let chipsField = document.querySelector('.chips-field');
	if (chipsField) {
		chipsField.appendChild(chips);
	} else {
		let chipsField = document.createElement('div');
		chipsField.classList.add('chips-field');
		document.querySelector('body').appendChild(chipsField);
		chipsField.appendChild(chips);
	}
}
