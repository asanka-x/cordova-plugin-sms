var exec = require('cordova/exec');
/* 
exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "SMS", "coolMethod", [arg0]);
};
 */
 var SMS={
	send:function (phone, message, method, successCallback, failureCallback) {    
		exec(successCallback, failureCallback, 'SMS', 'SEND_SMS', [phone, message, method]);
	},
	//Check if the device has a possibility to send and receive SMS
	isSupported:function(successCallback,failureCallback) {
		exec(successCallback, failureCallback, 'SMS', 'HAS_SMS_POSSIBILITY', []);
	},
	//Start receiving sms, and the successCallback function receives one string as parameter formatted such as [phonenumber]>[message]
	startReception:function(successCallback,failureCallback) {
		exec(successCallback, failureCallback, 'SMS', 'RECEIVE_SMS', []);
	},
	//Stop receiving sms
	stopReception:function(successCallback,failureCallback) {
		exec(successCallback, failureCallback, 'SMS', 'STOP_RECEIVE_SMS', []);
	}
 };
 
 module.exports = SMS;