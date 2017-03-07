function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function mycarddata()
{
	
	datainfo = 'Your Personal Data : ' + '\n' +
	'Name : mateusz' + '\n' +
	'Nazwisko : Salawa' + '\n' +
	'Student : Wsei';
	
	navigator.notification.alert(datainfo);
}