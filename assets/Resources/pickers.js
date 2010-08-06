var w = Ti.UI.currentWindow;
var l = Ti.UI.createLabel({
	text: 'Pickers',
	top: 5,
	left: 0,
	height: 40,
	width: Ti.Platform.displayCaps.platformWidth
});
w.add(l);

var data = [
	{title: 'Plain Picker', hasChild: true, test:'pickers_plain.js'},
	{title: 'Date Picker', hasChild: true, test:'pickers_date.js'},
	{title: 'Time Picker', hasChild: true, test:'pickers_time.js'},
	{title: 'Time Spinner', hasChild: true, test:'pickers_time_spinner.js'},
	{title: 'Date Picker Dialog', hasChild: true, test:'pickers_date_dialog.js'},
	{title: 'Time Picker Dialog', hasChild: true, test:'pickers_time_dialog.js'}
	
];

var tv = Ti.UI.createTableView({
	data: data,
	width: 380, 
	height: 'auto',
	top: 50,
	left: 0,
});

tv.addEventListener('click', function(e){
	var testurl = e.rowData.test;
	var testwin = Ti.UI.createWindow({
		url: testurl,
		backgroundColor: '#000',
		modal: true,
		title: e.rowData.title
	});
	testwin.open();
});

w.add(tv);

