// server.js
const express = require('express');
const path = require('path');
const app = express();
const courseRoutes = require('./routes/courseRoutes');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/api', courseRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
