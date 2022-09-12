import {Sequelize} from 'sequelize';

const db = new Sequelize('nodets', 'root', 'Freya2205',{
  host: 'localhost',
  dialect: 'mysql'
});

export default db;