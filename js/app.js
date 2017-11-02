var notNumber = 0;
var msgInput = 0;

(function($) {
detectMessage($);

console.log(msgInput);
})(jQuery);

function detectMessage($){
	if($('.message').length > 0){
		msgInput = 1;
	}
}
function setNumber(msgInput){
    if (msgInput === 1) {
    	notNumber = 1;
    } 
    notNumber.toString();
    $('popup-container::after').append(notNumber);
}
