hubot_node = require('./hubot_node')

module.exports = (robot) ->
  robot.hear /(.*)$/i, (msg) -> 
    hubot_node.hear(msg, robot)
