var hubot_node = {
	init: function() {
	},
	hear: function(msg, robot) {
    		message = msg.message.text;
        	
		switch(true) {
			case /Hello/.test(message):
				msg.send('World!!');
				break;
		}
	},
};

module.exports = hubot_node;

