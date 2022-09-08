"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.updateUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, resp) => {
    resp.json({
        msg: "getUsuarios"
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, resp) => {
    const { id } = req.params;
    resp.json({
        msg: "getUsuario",
        id
    });
};
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