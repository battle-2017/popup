var notNumber = 0;
var msgInput = 0;

(function($) {
detectMessage($); //detect that a message is there

setNumber(msgInput);
console.log(notNumber);
chatBox($);

})(jQuery);

function detectMessage($){
	if($('.unred').length > 0){
		msgInput = 1;
	}
}
function setNumber(msgInput){
	//check if the bot has send the message
    if (msgInput == 1) {
    	notNumber = 1;
    }else{
    	notNumber = 0;
    }
    // make it a string to display it
    notNumber.toString();

    $('.notNumber').text(notNumber);
}
function chatBox($){
	var position = 'up';

	$('.popup-button').click(function () {
	      if (position == 'up') {
	        $('.chat-area').css({'height' : '100%'});
	        position = 'down';

	        $("#message").removeClass("unred");
	      }
	      else {
	        $('.chat-area').css({'height' : '0%'});
	        position = 'up';
	      }
	});
}
