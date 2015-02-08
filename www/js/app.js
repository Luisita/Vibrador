// Función para emitir la vibracion
function vibrar(){
	alert("Vibrar Teléfono");
navigator.notification.alert("Vibrará Teléfono",	null,"Vibrar","Empezar");
navigator.notification.vibrate(1000);
}
// Función para emitir beep
function beep(){
	alert("Sonar beep");
navigator.notification.alert('Sonara beep',null,'Beep','Empezar');
navigator.notification.beep(500);
}