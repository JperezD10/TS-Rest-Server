"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('nodets', 'root', 'Freya2205', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = db;
//# sourceMappingURL=connection.js.map