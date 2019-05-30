document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('button').addEventListener('click', onclick, false);
	chrome.storage.sync.get('MyPaymoUsersName', function(data) {
		document.getElementById("PaymoNameID").value = data.MyPaymoUsersName;
	});
});

function onclick() {
 
    var usersName = document.getElementById("PaymoNameID").value

    chrome.storage.sync.set({ 'MyPaymoUsersName': usersName }, function(data) { 
	});
}
