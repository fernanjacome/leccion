// src/server.ts
import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize';
import fernandoJacomeVelizProductoModel from './models/fernando-jacome-veliz-producto';
import fernandoJacomeVelizProductosRoutes from './routes/fernando-jacome-veliz-productos';

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Sequelize y conexión a la base de datos
const sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

// Definir el modelo para Producto
const FernandoJacomeVelizProducto = fernandoJacomeVelizProductoModel(sequelize);

// Configuración de middleware
app.use(bodyParser.json());

// Configuración de las rutas
app.use('/api/fernando-jacome-veliz-productos', fernandoJacomeVelizProductosRoutes);

// Iniciar el servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
  });
});
