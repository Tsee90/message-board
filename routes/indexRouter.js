const { Router } = require('express');
const messageController = require('../controllers/messageController');
const indexRouter = Router();

indexRouter.get('/', messageController.messagesGet);

indexRouter.post('/new', messageController.messagesPost);

module.exports = indexRouter;
