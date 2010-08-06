Ti.include('toast.js');

var w = Ti.UI.currentWindow;

var picker = Ti.UI.createPicker({
	type: Ti.UI.PICKER_TYPE_DATE,
	maxDate: new Date(2017, 11, 31),
	minDate: new Date(2008, 0, 1),
	useSpinner: true
});
picker.addEventListener('change', function(e) {
	showStatus(e.value.toString());
});

w.add(picker);

var btnChange = Ti.UI.createButton({
	top: 10, left: 5, height: 40, width: 150,
	title: 'Change date to Nov 5 2012'
});
btnChange.addEventListener('click', function() {
	picker.value = new Date(2012, 10, 5);
});
w.add(btnChange);

var btnCheck = Ti.UI.createButton({
	top: 10, left: 165, height: 40, width: 150,
	title: 'Check date'
});
btnCheck.addEventListener('click', function() {
	showStatus(picker.value.toString());
});
w.add(btnCheck);