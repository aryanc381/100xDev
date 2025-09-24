import Client = require('pg');
import pg = require('pg');

const client = new pg.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});

// CREATE
async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result); 
}

// INSERT
async function insertUsersTable() {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, email, password) VALUES ('abhay', 'abhay@gmail.com', 'abhay@123');`
    );
    console.log(result);
}

// READ
async function readUsersTable() {
    await client.connect();
    const results = await client.query(`SELECT * FROM users LIMIT 5`);
    console.log(results);
}

// UPDATE
async function updateUsersTable() {
    await client.connect();
    const results = await client.query(`UPDATE users SET password = 'admin@12345' WHERE email = 'admin@gmail.com'`);
    console.log(results);
}

// DELETE
async function deleteUsersTable() {
    await client.connect();
    const results = await client.query(`DELETE FROM users WHERE id = 8;`);
    console.log(results);
}

// SELECT
async function selectUsersTable() {
    await client.connect();
    const results = await client.query(`SELECT * FROM users WHERE id = 1`);
    console.log(results);
}

async function safetyUsersTable(email: string) {
    /* const client = new pg.Client({
        host: "localhost",
        port: 5432,
        database: 'postgres',
        user: 'postgress',
        password: 'mysecretpassword'
    }) */
    await client.connect();
    const query = `SELECT * FROM users WHERE email = $1`;
    const values = [email];
    const results = await client.query(query, values);

    if(results.rows.length > 0) {
        console.log('User found: ', results.rows[0]);
        return results.rows[0];
    } else {
        console.log('No user found with the given email.');
        return null;
    }
}
// safetyUsersTable("haha@gmail.com");

async function join() {
    await client.connect();
    const results = await client.query(`
        SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
        FROM users u
        JOIN addresses a ON u.id = a.user_id
        WHERE u.id = 1;        
    `);
    console.log(results);
}
// join();

// createUsersTable();

// insertUsersTable();

// readUsersTable();

// updateUsersTable();

// deleteUsersTable();

// selectUsersTable();





