Ti.include('toast.js');

var w = Ti.UI.currentWindow;

var picker = Ti.UI.createPicker({
	type: Ti.UI.PICKER_TYPE_DATE,
	maxDate: new Date(2017, 9, 25),
	minDate: new Date(2008, 2, 7),
	useSpinner: true,
	height: 160,
	dayBeforeMonth: true,
	numericMonths: false,
	top: 100
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

var btnGerman = Ti.UI.createButton({
	top: 50, left: 5, width: 150, height: 40,
	title: 'To Spanish'
});
btnGerman.addEventListener('click', function() {
	picker.locale = 'es';
});
w.add(btnGerman);