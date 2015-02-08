// Función para emitir la vibracion
function vibrar(){
navigator.notification.alert("El teléfono vibrara",	null,"Vibrar","Empezar");
navigator.notification.vibrate(1000);
}
// Función para emitir beep
function beep(){
navigator.notification.alert('El teléfono emitirá un beep',null,'Beep','Empezar');
navigator.notification.beep(500);
}