const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('.')); // Serves files from the current directory


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'HomePage.html')); // Serve HomePage.html at the root path
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});
