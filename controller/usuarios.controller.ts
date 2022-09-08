import { Request, Response } from "express";

export const getUsuarios = (req:Request, resp:Response) => {

    resp.json({
        msg: "getUsuarios"
    });
}


export const getUsuario = (req:Request, resp:Response) => {

    const {id} = req.params;

    resp.json({
        msg: "getUsuario",
        id
    });
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