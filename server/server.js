import express from 'express';
import path from 'path';

// Inicializácia servera
const app = express();

// Definícia ciest "routes"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../bundle.js'));
});

app.get('/dzejo', (req, res) => {
  res.send('je dzejdzej');
});

// Spustenie servera
const PORT = 3000;
app.listen(PORT, () => {
  console.log('app is listening on port', PORT);
});
