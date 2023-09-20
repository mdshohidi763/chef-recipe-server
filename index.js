const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cardData = require('./Data/cardDetails.json');
const cors = require('cors')
app.use(cors())
app.get('/data', (req, res) => {
    res.send(cardData)
})

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    console.log('your single id is:',id);
    const selectedItem = cardData.find(d => d.id == id);
     res.send(selectedItem)
})
app.get('/', (req, res) => {
    res.send('Chef-recipe is running')
})
app.listen(port, () => {
    console.log(`Chef recipe hunter server running on port: ${port}`);
})
 