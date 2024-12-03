module.exports = {
  development: {
    client: 'mysql2', // Cambiado de 'mysql' a 'mysql2'
    connection: {
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'donut_db'
    }
  }
};
