"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize({
    dialect: 'mssql',
    dialectModulePath: 'sequelize-msnodesqlv8',
    dialectOptions: {
        instanceName: 'SQLEXPRESS',
        trustedConnection: true
    },
    host: 'localhost',
    database: 'NodeTS'
});
exports.default = db;
//# sourceMappingURL=connection.js.map