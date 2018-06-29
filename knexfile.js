'use strict';

module.exports = {
  development: {
    client: 'pg',
    // connection: 'postgres://user:pass@localhost:5432/dbname'
    connection: 'postgres://postgres:p@55w0rd@localhost:5432/gamestore_dev',
  },

  test: {
    client: 'pg',
    connection: 'postgres://postgres:p@55w0rd@localhost:5432/gamestore_dev',
  },

  production: {
    client: 'pg',
    connection: 'postgres://eutwxvengjxsyc:9be4052fc4b463f270e16dbd51afe5caf4c70650b3f2073b3b7c723ef56153c2@ec2-107-22-183-40.compute-1.amazonaws.com:5432/dfnmcm0bt6emo2'
  }
};
