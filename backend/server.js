const PORT = 8081;
const HOST = '0.0.0.0';
const VERSION = '1.0';
const datos = require('./data.json');

const app = require('express')();

app.get('/', (req, res) => {
	res.send(`API VERSION ${VERSION}`);
});

app.get('/api', (req, res) => {
	res.json(datos);
});

app.listen(PORT, HOST);
console.log(`Running NODE on http://localhost:${PORT} (private)`);
