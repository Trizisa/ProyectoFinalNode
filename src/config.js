// Configuracion puerto del servidor
export const PORT = process.env.PORT || 3001;

// Configurar datos de la conexion a BBDD
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_NAME = process.env.DB_NAME || 'NodeBBDD';
export const DB_PORT = process.env.DB_PORT || 3306;