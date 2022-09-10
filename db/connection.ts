import {Sequelize} from 'sequelize';

const db = new Sequelize({
    dialect: 'mssql',
    dialectModulePath: 'sequelize-msnodesqlv8',
    dialectOptions: {
      instanceName: 'SQLEXPRESS',
      trustedConnection: true
    },
    host: 'localhost',
    database: 'NodeTS'
});

export default db;