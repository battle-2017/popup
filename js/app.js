var notNumber = 0;
var msgInput = 0;

(function($) {
detectMessage($); //detect that a message is there

setNumber(msgInput);

console.log(notNumber);
})(jQuery);

function detectMessage($){
	if($('.message').length > 0){
		msgInput = 1;
	}
}
function setNumber(msgInput){
	//check if the bot has send the message
    if (msgInput === 1) {
    	notNumber = 1;
    }
    // make it a string to display it
    notNumber.toString();

    $('.notNumber').text(notNumber);
}
