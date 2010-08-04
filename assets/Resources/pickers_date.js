Ti.include('toast.js');

var w = Ti.UI.currentWindow;

var picker = Ti.UI.createPicker({
	type: Ti.UI.PICKER_TYPE_DATE
});
picker.addEventListener('change', function(e) {
	showStatus(e.value.toString());
});

w.add(picker);

var btnChange = Ti.UI.createButton({
	top: 10, left: 5, height: 40, width: 150,
	title: 'Change date'
});
btnChange.addEventListener('click', function() {
	picker.value = new Date(2011, 0, 1);
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