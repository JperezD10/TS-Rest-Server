import {DataType, DataTypes} from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('usuario',{
    Nombre:{
        type: DataTypes.STRING
    },
    Email:{
        type: DataTypes.STRING
    },
    Estado:{
        type: DataTypes.BOOLEAN
    }
});

export default Usuario;