require('dotenv').config();
const express = require('express');
const cors = require('cors');
const loanRoutes = require('./routes/loanRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Menggunakan router terpisah
app.use('/loans', loanRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Never Gonna Give You Up Never Gonna Let you Down" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di port ${PORT}`));

module.exports = app;