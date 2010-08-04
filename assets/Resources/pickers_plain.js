Ti.include('toast.js');

var w = Ti.UI.currentWindow;

var rows = [];
for (var i = 0; i < 5; i++) {
	rows.push(Ti.UI.createPickerRow({title: 'Item ' + i}));
}

var column = Ti.UI.createPickerColumn( {
	rows: rows
});

var picker = Ti.UI.createPicker({
	type : Ti.UI.PICKER_TYPE_PLAIN,
	left: 0, height: 40, top: 5, width: Ti.Platform.displayCaps.platformWidth,
	columns: [ column ]
});

picker.addEventListener('change', function(e) {
	showStatus(e.row.title);
});

w.add(picker);

var btnSelect = Ti.UI.createButton({
	left: 5, height: 40, top: 50, width: 150,
	title: 'Select idx 2'
});
btnSelect.addEventListener('click', function() {
	picker.setSelectedRow(0, 2, true);
});
w.add(btnSelect);

var btnAdd = Ti.UI.createButton({
	left: 165, height: 40, top: 50, width: 150,
	title: 'Add row'
});
btnAdd.addEventListener('click', function() {
	picker.add(Ti.UI.createPickerRow({title: 'added row'}));
	showStatus("Check dropdown: row has been added.");
});
w.add(btnAdd);

var btnRemove = Ti.UI.createButton({
	left: 5, height: 40, top: 100, width: 150,
	title: 'Remove idx 3'
});
btnRemove.addEventListener('click', function() {
	picker.columns[0].removeRow( picker.columns[0].rows[3] );
	showStatus("Check dropdown: row has been removed.");
});
w.add(btnRemove);

var btnCheckSelection = Ti.UI.createButton({
	left: 165, height: 40, top: 100, width: 150,
	title: 'Check sel.'
});
btnCheckSelection.addEventListener('click', function() {
	showStatus(picker.getSelectedRow(0).title);
});
w.add(btnCheckSelection);