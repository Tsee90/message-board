const db = require('../db/queries');

exports.messagesGet = async (req, res) => {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render('index', { title: 'Mini Messageboard', messages: messages });
};

exports.messagesPost = async (req, res) => {
  const { messageText, messageUser } = req.body;
  console.log(messageText + ' ' + messageUser);
  await db.insertMessage(messageUser, messageText);
  res.redirect('/');
};
