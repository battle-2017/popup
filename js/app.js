var notNumber = 0;
var msgInput = 0;

(function($) {
detectMessage($); //detect that a message is there

setNumber(msgInput);
chatBox($);
})(jQuery);
function detectMessage($){
	if($('#message').length > 0){
		msgInput = 1;
	}
}
function setNumber(){
	//check if the bot has send the message
    if (msgInput === 1) {
    	notNumber = 1;
    }
}
function chatBox($){
	var position = 'up';

	$('.popup-button').click(function () {
	      if (position == 'up') {
	        $('.chat-area').css({'height' : '100%'});
	        position = 'down';

	        notNumber = 0;
	      }
	      else {
	        $('.chat-area').css({'height' : '0%'});
	        position = 'up';
	      }
	});
}
