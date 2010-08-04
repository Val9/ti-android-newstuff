var w = Ti.UI.currentWindow;
var l = Ti.UI.createLabel({
	text: 'New Titanium Stuff',
	top: 5,
	left: 0,
	height: 40,
	width: Ti.Platform.displayCaps.platformWidth
});
w.add(l);

var data = [
	{title: 'Contacts', hasChild: true, test:'contacts.js'},
	{title: 'Pickers', hasChild: true, test:'pickers.js'}
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

