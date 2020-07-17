



function myAlert(title, message) {
	title = (title == undefined)? '' : title
	message = (message == undefined)? '' : message
	var newAlert = document.createElement("div");
	newAlert.className = 'myAlert'
	newAlert.innerHTML = '<h2 class="h1Alert">' + title + '</h2><hr class="bg-danger"><span class="textAlert">' + message + '</span><br><br><button class="btn-success" onclick="deleteAlert()">OK</button>'
	document.body.appendChild(newAlert);
}
function deleteAlert() {
	document.querySelector('body').removeChild(document.querySelector('.myAlert'));
}

