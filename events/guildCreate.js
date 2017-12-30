/* eslint consistent-return:0, no-console:0, linebreak-style:0 */

module.exports = (client, guild) => {
  client.log('Log', `Added to guild - Name: ${guild.name} - Owner: ${guild.owner.user.tag} - Member count: ${guild.memberCount}`);
};
