Ti.include('toast.js');

var w = Ti.UI.currentWindow;

var btn = Ti.UI.createButton({
	top: 10, left: 10, width: 300, height: 40,
	title: 'Show standard time picker dialog'
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
	Ti.UI.createPicker().showTimePickerDialog(settings);
	
});
w.add(btn);


var btn2 = Ti.UI.createButton({
	top: 50, left: 10, width: 300, height: 40,
	title: 'Show custom time picker dialog'
});
btn2.addEventListener('click', function() {
	var d = new Date();
	d.setHours(15);
	d.setMinutes(0);
	var settings={title: "Custom Title Here", okButtonTitle: "Click me", value: d, format24: true};
	settings.callback = function(e) {
		if (e.cancel) {
			showStatus("canceled");
		} else {
			showStatus(e.value.toString());
		}
	};
	Ti.UI.createPicker().showTimePickerDialog(settings);
	
});
w.add(btn2);