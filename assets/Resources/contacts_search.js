Ti.include('toast.js');
Ti.include('contact_utils.js');

var w = Ti.UI.currentWindow;
var l = Ti.UI.createLabel({
	text: 'Contacts Search',
	top: 5,
	left: 0,
	height: 40,
	width: Ti.Platform.displayCaps.platformWidth
});
w.add(l);

var testname = "Adelheid Oistric";
var testid = 6;

var data = [
        	{title: 'People named "' + testname + '"', hasChild: true, test: 'name'},
        	{title: 'Person with id "' + testid + '"', hasChild: true, test: 'byId'},
        	{title: 'All People', hasChild: true, test: 'all'}
        ];

var tv = Ti.UI.createTableView({
	data: data,
	width: 380, 
	height: 'auto',
	top: 50,
	left: 0,
});

tv.addEventListener('click', function(e){
	var test = e.rowData.test;
	var result;
	if (test === 'name') {
		result = Ti.Contacts.getPeopleWithName(testname);
		showStatus(personCollectionToString(result));
	} else if (test === 'byId') {
		result = Ti.Contacts.getPersonByID(testid);
		showStatus(personToString(result));
	} else if (test === 'all') {
		result = Ti.Contacts.getAllPeople();
		showStatus(personCollectionToString(result));
	}
});

w.add(tv);
