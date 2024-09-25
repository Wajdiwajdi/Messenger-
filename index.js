const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const multer = require('multer');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    io.emit('message', data);
  });

  socket.on('file-upload', (data) => {
    io.emit('file-upload', data);
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
