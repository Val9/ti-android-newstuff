Ti.include('toast.js');
Ti.include('contact_utils.js');

var w = Ti.UI.currentWindow;
var l = Ti.UI.createLabel({
	text: 'Contacts Picker',
	top: 5,
	left: 0,
	height: 40,
	width: Ti.Platform.displayCaps.platformWidth
});
w.add(l);

function showAndGet() {
	Ti.Contacts.showContacts({
		selectedPerson: function(person) {
			try {
				showStatus(personToString(person));
			} catch(e) {alert(e);}
		},
		cancel: function() {
			showStatus('Contact Picker was canceled');
		}
	});
}

var data = [
        	{title: 'Show Picker & Get Result', hasChild: true, test: 'showAndGet'}
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
	if (test === 'showAndGet') {
		showAndGet();
	}
});

w.add(tv);
