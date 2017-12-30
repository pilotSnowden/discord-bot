/* eslint consistent-return:0, no-console:0, linebreak-style:0, no-unused-vars:0 */

module.exports = (client, message, args) => {
  message.channel.send('Pong...').then((msg) => {
    msg.edit(`Pong! Latency is ${client.ping}ms`);
  });
};