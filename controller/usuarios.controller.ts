import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async(req:Request, resp:Response) => {

    const Usuarios = await Usuario.findAll();
    resp.json(Usuarios);
}


export const getUsuario = async (req:Request, resp:Response) => {

    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);
    if (!usuario){
        resp.status(404).json({
            msg: "No se encotro el usuario"
        })
    }
    resp.json(usuario);
}

export const postUsuario = (req:Request, resp:Response) => {

    const {body} = req;

    resp.json({
        msg: "PostUsuarios",
        body
    });
}

export const updateUsuario = (req:Request, resp:Response) => {

    const {id} = req.params;
    const {body} = req;

    resp.json({
        msg: "UpdateUsuarios",
        id,
        body,
    });
}

export const deleteUsuario = (req:Request, resp:Response) => {

    const {id} = req.params;

    resp.json({
        msg: "DeleteUsuario",
        id,
    });
}