/* eslint consistent-return:0, no-console:0, linebreak-style:0 */

module.exports = (client, member) => {
  const welcomeChannel = member.guild.channels.find('name', 'general');
  if (welcomeChannel) {
    welcomeChannel.send(`Welcome to the server! <@${member.user.id}>`);
  }
};
