/* eslint consistent-return:0, no-console:0, linebreak-style:0, no-unused-vars:0 */

module.exports = (client, message, args) => {
  const pfx = (client.config.prefix);
  message.author.send(`**COMMAND LIST - PREFIX: ${pfx}** \n${pfx}ping \n${pfx}help/cmds \n${pfx}invite`); 
};
