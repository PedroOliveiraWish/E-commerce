import mysql from 'mysql2';

require('dotenv').config({ path: '../config/.env' });

dotenv.config();

const connection_create = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const connection_database = async () => {
    try {
        connection_create.connect((err) => {
            if (err) {
                console.error('Error to connect to database:', err);
                return;
            }
            console.log('Connection to database successful');
        });
    } catch (error) {
        console.error('Error to connect to database:', error);
    }
};

// ✅ Exporte os dois corretamente
export { connection_create, connection_database };
