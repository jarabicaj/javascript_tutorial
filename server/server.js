import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mysql from 'mysql';

const connection = mysql.createConnection({
  // definovanie pripojenia k databaze
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

connection.connect(); // pokus o pripojenie k databaze

// Inicializácia servera
const app = express();

// parse application/json
app.use(bodyParser.json());

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

app.post('/save', (req, res) => {
  const user = req.body;
  // TODO: save to db

  connection.query(
    `INSERT INTO table_1 (firstname, lastname, age) VALUES ('${user.firstname}', '${user.lastname}', '${user.age}')`,
    (error, results, fields) => {
      if (error) {
        res.json({
          status: 'fucked-up',
        });
      }
      res.json({
        status: 'success',
        id: results.insertId,
      });
    },
  );
});

// Spustenie servera
const PORT = 3000;
app.listen(PORT, () => {
  console.log('app is listening on port', PORT);
});
