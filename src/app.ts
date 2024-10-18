import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { Animal } from "./entities/Animal";
import animalRoutes from './routes/animals';

const app = express();
app.use(express.json());

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root", // tu usuario de MySQL
    password: "tu_contraseña", // tu contraseña de MySQL
    database: "animal", // nombre de la base de datos
    entities: [Animal],
    synchronize: true,
    logging: true
}).then(() => {
    console.log("Conexión a la base de datos establecida");

    // Rutas
    app.use('/api/animals', animalRoutes);

    app.listen(3001, () => {
        console.log("Servidor corriendo en el puerto 3001");
    });
}).catch(error => console.log(error));
