Ti.include('toast.js');

var w = Ti.UI.currentWindow;

var picker = Ti.UI.createPicker({
	type: Ti.UI.PICKER_TYPE_TIME,
	height: 160,
	useSpinner: true
});
picker.addEventListener('change', function(e) {
	showStatus(e.value.toString());
});

w.add(picker);

var btnChange = Ti.UI.createButton({
	top: 10, left: 5, height: 40, width: 150,
	title: 'Change time to 13:45'
});
btnChange.addEventListener('click', function() {
	var d = new Date();
	d.setHours(13);
	d.setMinutes(45);
	picker.value = d;
});
w.add(btnChange);

var btnCheck = Ti.UI.createButton({
	top: 10, left: 165, height: 40, width: 150,
	title: 'Check time'
});
btnCheck.addEventListener('click', function() {
	showStatus(picker.value.toString());
});
w.add(btnCheck);

/*
var btn24 = Ti.UI.createButton({
	top: 50, left: 5, height: 40, width: 150,
	title: 'Toggle 24h'
});
btn24.addEventListener('click', function() {
	var is24 = picker.format24;
	if (is24) {
		is24 = false;
	} else {
		is24 = true;
	}
	picker.format24 = is24;
});
w.add(btn24);
*/