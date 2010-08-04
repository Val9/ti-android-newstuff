Ti.include('toast.js');

var w = Ti.UI.currentWindow;

var btn = Ti.UI.createButton({
	top: 10, left: 10, width: 300, height: 40,
	title: 'Show standard date picker dialog'
});
btn.addEventListener('click', function() {
	var settings={};
	settings.callback = function(e) {
		if (e.cancel) {
			showStatus("canceled");
		} else {
			showStatus(e.value.toString());
		}
	};
	Ti.UI.createPicker().showDatePickerDialog(settings);
	
});
w.add(btn);


var btn2 = Ti.UI.createButton({
	top: 50, left: 10, width: 300, height: 40,
	title: 'Show custom date picker dialog'
});
btn2.addEventListener('click', function() {
	var settings={title: "Custom Title Here", okButtonTitle: "Click me", value: new Date(2007, 0, 3)};
	settings.callback = function(e) {
		if (e.cancel) {
			showStatus("canceled");
		} else {
			showStatus(e.value.toString());
		}
	};
	Ti.UI.createPicker().showDatePickerDialog(settings);
	
});
w.add(btn2);