const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use dynamic port for hosting environments

// Serve static files
app.use(express.static(path.join(__dirname)));

// Route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for /free-video-shoot
app.get('/free-video-shoot', (req, res) => {
  res.sendFile(path.join(__dirname, 'index-freevideo.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
