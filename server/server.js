const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '../build');
const port = process.env.PORT || 8080;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('The server is running!');
});


//"start": "node server/server.js",