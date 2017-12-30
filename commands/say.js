/* eslint consistent-return:0, no-console:0, linebreak-style:0, no-unused-vars:0 */

module.exports = (client, message, args) => {
  if (!message.author.id === client.config.ownerID) return message.reply('No');
  message.channel.send(args.join(' '));
  message.delete();
};
