const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files (images) from the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Post Routes
app.use('/api/posts', postRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
