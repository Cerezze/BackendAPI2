const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/DetailPage', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/DetailPage.html'));
});

app.get('/CreateReview', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/CreateReview.html'));
});

app.get('/ReviewControll', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/ReviewControll.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
    console.log(`Listening from port ${port}`);
})