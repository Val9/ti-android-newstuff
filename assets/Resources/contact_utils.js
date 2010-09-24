
function personToString(person)
{
	var text = 'ID: ' + person.id + '; Full name: ' + person.fullName;
	var email = person.email;
	var displayAddress;
	if (email) {
		if ("other" in email) {
			displayAddress = email.other[0] + " (other)";
		} else if ("work" in email) {
			displayAddress = email.work[0] + " (work)";
		} else if ("home" in email) {
			displayAddress = email.home[0] + " (home)";
		}
	}
	
	if (displayAddress) {
		text += "; Email: " + displayAddress;
	}
	
	var phone = person.phone;
	displayAddress = "";
	
	if (phone) {
		if ("other" in phone) {
			displayAddress = phone.other[0] + " (other)";
		} else if ("work" in phone) {
			displayAddress = phone.work[0] + " (work)";
		} else if ("home" in phone) {
			displayAddress = phone.home[0] + " (home)";
		} else if ("mobile" in phone) {
			displayAddress = phone.mobile[0] + " (mobile)";
		}
		if (displayAddress) {
			text += "; Phone: " + displayAddress;
		}
	}
	
	var address = person.address;
	displayAddress = "";
	
	if (address) {
		if ("other" in address) {
			displayAddress = address.other[0].Street + " (other)";
		} else if ("work" in address) {
			displayAddress = address.work[0].Street + " (work)";
		} else if ("home" in address) {
			displayAddress = address.home[0].Street + " (home)";
		} else if ("mobile" in address) {
			displayAddress = address.mobile[0].Street + " (mobile)";
		}
		if (displayAddress) {
			text += "; Address: " + displayAddress;
		}
	}
	
	if (person.note && person.note.length) {
		text += "; Notes: " + person.note;
	}
	return text;
}

function personCollectionToString(collection)
{
	var text = "Length: " + collection.length;
	var more = false;
	for (var i = 0 ; i < collection.length; i++) {
		// Only show 3
		if (i > 2) {
			more = true;
			break;
		}
		text += "; " + personToString(collection[i]);
	}
	if (more)
	{
		text += " [...]";
	}
	return text;
}