// Importamos solo el enrutador desde el express
import {Router} from 'express';
import { home, login, registro, insertUsers, showUsers, deleteUser } from '../controllers/controllers.js';
import { pool } from '../db.js';

//Inicio del enrutador y lo almaceno en una constante
const router = Router();

// Creamos las rutas
router.get('/', home); 
router.get('/login', login); 
router.get('/registro', registro); 

// Buscamos todos los usuarios que estan en la base de datos
router.get('/connect', async (req, res) => { 
    const [result] = await pool.query('SELECT * FROM users AS RESULT')
    res.json(result[0])})

// Insertamos un usuario 
router.post('/insertUsers', insertUsers) 

// Mostramos un usuario
router.post('/showUsers', showUsers)

// Para borrar un usuario de la tabla
router.post('/deleteUser/:id', deleteUser)

export default router;