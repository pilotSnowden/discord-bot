/* eslint consistent-return:0, no-console:0, linebreak-style:0 */

module.exports = (member) => {
  const welcomeChannel = member.guild.channels.find('name', 'general');
  if (welcomeChannel) {
    welcomeChannel.send(`${member.user.tag} has left the server. Goodbye!`);
  }
};
