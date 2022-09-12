"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.updateUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const Usuarios = yield usuario_1.default.findAll();
    resp.json(Usuarios);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        resp.status(404).json({
            msg: "No se encotro el usuario"
        });
    }
    resp.json(usuario);
});
exports.getUsuario = getUsuario;
const postUsuario = (req, resp) => {
    const { body } = req;
    resp.json({
        msg: "PostUsuarios",
        body
    });
};
exports.postUsuario = postUsuario;
const updateUsuario = (req, resp) => {
    const { id } = req.params;
    const { body } = req;
    resp.json({
        msg: "UpdateUsuarios",
        id,
        body,
    });
};
exports.updateUsuario = updateUsuario;
const deleteUsuario = (req, resp) => {
    const { id } = req.params;
    resp.json({
        msg: "DeleteUsuario",
        id,
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.controller.js.map