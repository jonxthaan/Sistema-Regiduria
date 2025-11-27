const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 1. Conexión a Base de Datos (Igual que en PHP pero en JS)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sistema_regiduria'
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la BD:', err);
        return;
    }
    console.log('Conectado a MySQL exitosamente');
});

// Iniciar servidor en puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});