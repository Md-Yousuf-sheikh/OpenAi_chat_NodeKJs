const express = require('express');
const app = express();
const aiChatJockRouter = require('./routers/aiChatJockRouter');
app.use('/api', aiChatJockRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
