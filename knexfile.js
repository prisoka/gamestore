'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      user : 'postgres',
      password : 'p@55w0rd',
      database : 'gamestore_db'
    }
  },

  test: {
    client: 'pg',
    connection: {
      user : 'postgres',
      password : 'p@55w0rd',
      database : 'gamestore_db'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
